# Documentación del Proyecto Web

## Portada

- Proyecto: RutaMundo
- Tipo de proyecto: Portal web informativo de viajes
- Asignatura/Módulo: HTML, CSS y JavaScript
- Año: 2026

## Breve descripción del proyecto

RutaMundo es un portal web de viajes que permite explorar información de países y solicitar asesoría de viaje.
El sitio combina contenido informativo, búsqueda de destinos y un formulario de contacto validado en el navegador.
Además, integra datos en tiempo real desde REST Countries API para mostrar información actualizada.

## Objetivos del portal web

- Presentar una experiencia web clara y moderna para consulta de destinos internacionales.
- Implementar consumo de un servicio web (API) para mostrar datos reales de países.
- Permitir búsqueda y filtrado por nombre y región para mejorar la exploración de destinos.
- Aplicar validaciones de formulario del lado del cliente con retroalimentación visual.
- Organizar el proyecto con una estructura limpia de archivos HTML, CSS y JavaScript.

## Tipo de sitio desarrollado (informativo, comercial, personal, etc.)

Tipo principal: Informativo con componente de servicios turísticos.

### Maquetación (Wireframe)

El sitio está organizado en tres vistas principales:

- Inicio:
  - Encabezado fijo con navegación.
  - Hero principal con llamada a la acción.
  - Sección de destacados rápidos.
  - Sección de características del portal.
- Destinos y Servicios:
  - Introducción de la sección.
  - Panel de filtros (búsqueda y región).
  - Cuadrícula dinámica de países.
  - Botón de paginación incremental (cargar más).
  - Tarjetas de servicios turísticos.
- Contacto:
  - Introducción.
  - Formulario validado.
  - Panel de información de contacto.
  - Mensaje de retroalimentación al enviar.

### Descripción del diseño aplicado (colores, tipografía, distribución)

- Paleta de color:
  - Fondo claro cálido con degradados y formas radiales.
  - Color principal: verde representando naturaleza.
  - Color secundario: naranja para acentuar.
  - Estados semánticos para éxito (verde) y error (rojo).
- Tipografía:
  - Outfit para texto general.
  - Space Grotesk para títulos.
- Distribución:
  - Uso de contenedor central para mantener legibilidad.
  - Secciones modulares en tarjetas con bordes suaves y sombra.
  - Rejillas para listas de características, servicios y países.

### Uso de CSS (externo, organización del archivo, estilos aplicados)

- Se utiliza un archivo externo de estilos: assets/css/styles.css.
- El archivo concentra:
  - Variables CSS (tema de color y sombras).
  - Estilos globales base.
  - Componentes reutilizables (botones, paneles, tarjetas).
  - Layout de secciones (hero, filtros, grid de países, contacto).
  - Transiciones para aparición progresiva de contenido (clase reveal).

### Funcionalidades implementadas con JavaScript

- Animación de entrada por intersección de secciones (IntersectionObserver).
- Carga de países desde API externa.
- Búsqueda por nombre de país en tiempo real.
- Filtro de países por región.
- Paginación progresiva mediante botón Cargar más países.
- Localización al español de datos mostrados:
  - Nombre de país (traducción disponible).
  - Moneda (DisplayNames con fallback).
  - Región (mapeo a etiquetas en español).
- Validación de formulario de contacto con panel de mensajes de error/éxito.

#### Integración de servicios (API)
##### Descripción del servicio web o API utilizada

- API: REST Countries
- Endpoint usado:
  - https://restcountries.com/v3.1/all?fields=name,translations,capital,region,population,currencies,languages,flags
- Datos consumidos:
  - Nombre, traducciones, capital, región, población, monedas, idiomas y bandera.

##### Función que cumple dentro del portal

La API proporciona la base de datos de países que alimenta dinámicamente la sección de destinos.
Esto evita hardcodear información y permite mostrar datos reales y actualizables.

##### Explicación general de cómo se integró

- Se realiza una solicitud fetch al cargar la página de servicios.
- La respuesta JSON se ordena alfabéticamente por nombre en español.
- Los datos se almacenan en caché en memoria para aplicar filtros locales sin nuevas peticiones.
- Los resultados se renderizan en tarjetas dentro de la cuadrícula.
- Se controla el estado de carga y errores en la lógica JavaScript, con renderizado directo en la cuadrícula de destinos.

## Descripción del desarrollo

El desarrollo del portal se realizó por etapas para mantener una implementación ordenada y verificable.
Primero se construyó la estructura base de navegación y páginas en HTML semántico.
Después se aplicó el diseño visual en CSS con una identidad coherente (paleta, tipografías y componentes).
En la fase de JavaScript se incorporaron las interacciones del sitio: animaciones de aparición, consumo de API, filtros y validación de formularios.
Finalmente, se ejecutaron pruebas funcionales manuales para validar navegación, carga de datos y comportamiento del formulario.

### Explicación de la estructura del sitio web

La arquitectura del sitio sigue un modelo de separación por responsabilidades:

- HTML para la estructura y el contenido de cada vista.
- CSS centralizado para estilos globales y componentes compartidos.
- JavaScript modular por página para comportamiento específico.

Esta organización facilita el mantenimiento, porque cada archivo cumple una función concreta y evita mezclar estructura, estilo y lógica en un mismo lugar.
Además, permite escalar el proyecto agregando nuevas secciones o scripts sin romper el flujo actual.

#### Páginas creadas

- index.html (Inicio)
- servicios.html (Destinos y Servicios)
- contacto.html (Contacto)

#### Organización de carpetas (HTML, CSS, JS, imágenes)

- Raíz del proyecto:
  - index.html
  - servicios.html
  - contacto.html
  - PRUEBAS.txt
- Carpeta assets:
  - css/styles.css
  - js/main.js
  - js/servicios.js
  - js/contacto.js

### Tecnologías utilizadas (HTML, CSS, JavaScript)

- HTML5 para estructura semántica de páginas.
- CSS3 para estilos visuales, composición y transiciones.
- JavaScript (ES6+) para interacción, validación y consumo de API.

## Publicación del sitio web
### Plataforma utilizada

- Repositorio de código: GitHub.
- Despliegue y hosting: Netlify.

### Enlace del sitio web publicado

- https://cheery-belekoy-cf6c4d.netlify.app/

## Resultados y evidencias
### Capturas de pantalla del sitio funcionando

 - Las capturas se encuentran en la carpeta de capturas

### Evidencias de pruebas realizadas

- Evidencias funcionales registradas en PRUEBAS.txt:
  - Navegación entre páginas.
  - Carga de países desde API.
  - Búsqueda y filtro.
  - Manejo de error de API.
  - Validación y envío de formulario.

## Conclusión personal

El desarrollo de RutaMundo permitió aplicar de forma práctica HTML, CSS y JavaScript en un proyecto integrado. La incorporación de una API real fortaleció la experiencia del usuario y la calidad del contenido mostrado. El proyecto quedó publicado mediante integración entre GitHub (control de versiones) y Netlify (despliegue).