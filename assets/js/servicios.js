const countriesGrid = document.getElementById("countriesGrid");
const statusPanel = document.getElementById("statusPanel");
const searchCountry = document.getElementById("searchCountry");
const regionFilter = document.getElementById("regionFilter");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let countriesCache = [];
let filteredCountries = [];
let visibleCount = 0;

const PAGE_SIZE = 24;
const currencyDisplayNames =
  typeof Intl !== "undefined" && typeof Intl.DisplayNames === "function"
    ? new Intl.DisplayNames(["es"], { type: "currency" })
    : null;

function formatPopulation(value) {
  return new Intl.NumberFormat("es-CO").format(value || 0);
}

function getDisplayCountryName(country) {
  return country.translations?.spa?.common || country.name?.common || "No disponible";
}

function getDisplayCurrencyName(country) {
  const currencyKey = country.currencies ? Object.keys(country.currencies)[0] : null;

  if (!currencyKey) {
    return "No disponible";
  }

  const localizedCurrencyName = currencyDisplayNames?.of(currencyKey);
  const fallbackCurrencyName = country.currencies[currencyKey]?.name;

  return localizedCurrencyName || fallbackCurrencyName || currencyKey;
}

function getDisplayRegionName(region) {
  const regionMap = {
    Africa: "África",
    Americas: "Américas",
    Asia: "Asia",
    Europe: "Europa",
    Oceania: "Oceanía",
    Antarctic: "Antártida"
  };

  if (!region) {
    return "No disponible";
  }

  return regionMap[region] || region;
}

function updateLoadMoreState(total) {
  if (!loadMoreBtn) return;

  const hasMore = visibleCount < total;
  loadMoreBtn.classList.toggle("hidden", !hasMore);

  if (hasMore) {
    const remaining = total - visibleCount;
    loadMoreBtn.textContent = `Cargar más países (${remaining} restantes)`;
  }
}

function updateStatus(message, variant = "") {
  if (!statusPanel) return;

  statusPanel.textContent = message;
  statusPanel.className = variant ? `status-panel ${variant}` : "status-panel";
}

function renderCountries(list, append = false) {
  if (!countriesGrid) return;

  if (!append) {
    countriesGrid.innerHTML = "";
  }

  if (!list.length) {
    updateStatus("No se encontraron destinos con ese criterio.", "error");
    if (loadMoreBtn) {
      loadMoreBtn.classList.add("hidden");
    }
    return;
  }

  const itemsToRender = list.slice(0, visibleCount);
  const currentCount = countriesGrid.childElementCount;
  const newItems = itemsToRender.slice(currentCount);

  updateStatus(`${itemsToRender.length} de ${list.length} destino(s) visibles.`, "success");

  const fragment = document.createDocumentFragment();

  newItems.forEach((country) => {
    const card = document.createElement("article");
    card.className = "country-card";

    const displayCountryName = getDisplayCountryName(country);
    const displayRegionName = getDisplayRegionName(country.region);
    const currencyName = getDisplayCurrencyName(country);
    const languageKey = country.languages ? Object.keys(country.languages)[0] : null;
    const languageName = languageKey ? country.languages[languageKey] : "No disponible";

    card.innerHTML = `
      <img src="${country.flags?.svg || country.flags?.png || ""}" alt="Bandera de ${displayCountryName}" loading="lazy" />
      <div class="content">
        <h3>${displayCountryName}</h3>
        <p><strong>Capital:</strong> ${country.capital?.[0] || "No disponible"}</p>
        <p><strong>Región:</strong> ${displayRegionName}</p>
        <p><strong>Población:</strong> ${formatPopulation(country.population)}</p>
        <p><strong>Moneda:</strong> ${currencyName}</p>
        <p><strong>Idioma:</strong> ${languageName}</p>
      </div>
    `;

    fragment.appendChild(card);
  });

  countriesGrid.appendChild(fragment);
  updateLoadMoreState(list.length);
}

function applyFilters() {
  const text = searchCountry.value.trim().toLowerCase();
  const region = regionFilter.value;

  filteredCountries = countriesCache.filter((country) => {
    const spanishName = getDisplayCountryName(country).toLowerCase();
    const defaultName = (country.name?.common || "").toLowerCase();
    const matchesText = spanishName.includes(text) || defaultName.includes(text);
    const matchesRegion = region === "all" || country.region === region;

    return matchesText && matchesRegion;
  });

  visibleCount = Math.min(PAGE_SIZE, filteredCountries.length);
  renderCountries(filteredCountries);
}

function loadMoreCountries() {
  if (!filteredCountries.length) return;

  visibleCount = Math.min(visibleCount + PAGE_SIZE, filteredCountries.length);
  renderCountries(filteredCountries, true);
}

async function loadCountries() {
  if (!countriesGrid) return;

  try {
    updateStatus("Cargando destinos...");

    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,translations,capital,region,population,currencies,languages,flags"
    );

    if (!response.ok) {
      throw new Error("No fue posible consultar la API de países");
    }

    const data = await response.json();
    countriesCache = data.sort((a, b) =>
      getDisplayCountryName(a).localeCompare(getDisplayCountryName(b), "es")
    );
    filteredCountries = countriesCache;
    visibleCount = Math.min(PAGE_SIZE, filteredCountries.length);
    renderCountries(filteredCountries);
  } catch (error) {
    updateStatus("Error cargando destinos. Intenta nuevamente en unos minutos.", "error");
    countriesGrid.innerHTML = "";
    if (loadMoreBtn) {
      loadMoreBtn.classList.add("hidden");
    }
  }
}

if (searchCountry && regionFilter) {
  searchCountry.addEventListener("input", applyFilters);
  regionFilter.addEventListener("change", applyFilters);
}

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", loadMoreCountries);
}

loadCountries();
