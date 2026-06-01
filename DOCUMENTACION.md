# RESUMEN

RutaMundo es un portal web de viajes orientado a la consulta de información de países y servicios turísticos. El sitio integra contenido estático y consumo de datos en tiempo real por medio de una API externa, permitiendo al usuario buscar destinos, filtrarlos por región y visualizar datos relevantes como capital, población, moneda e idioma. También incluye un formulario de contacto con validaciones del lado del cliente para mejorar la calidad de la interacción.

Palabras clave: desarrollo web, JavaScript, API, turismo, interfaz de usuario.

# BREVE DESCRIPCIÓN DEL PROYECTO

RutaMundo corresponde a un proyecto web informativo centrado en la exploración de destinos internacionales. La solución integra una interfaz moderna, consumo de API pública y formularios validados para fortalecer la experiencia de usuario. El proyecto fue construido con HTML5, CSS3 y JavaScript, manteniendo una organización modular por responsabilidades.

# OBJETIVOS DEL PORTAL WEB

## Objetivo general

Desarrollar un portal web informativo de viajes que permita consultar destinos internacionales y gestionar interacciones básicas del usuario mediante tecnologías front-end.

## Objetivos específicos

1. Presentar una experiencia web clara y moderna para consulta de destinos internacionales.
2. Implementar consumo de un servicio web para mostrar datos reales y actualizados.
3. Permitir búsqueda y filtrado de países para facilitar la exploración de destinos.
4. Aplicar validaciones de formulario en cliente con mensajes de retroalimentación.
5. Mantener una estructura ordenada de archivos HTML, CSS y JavaScript.

# TIPO DE SITIO DESARROLLADO

Tipo de sitio: informativo, con componentes de servicios turísticos.

## Maquetación (Wireframe)

La maquetación del sitio se divide en tres vistas principales:

1. Inicio: encabezado fijo, sección principal, destacados y características.
2. Servicios: introducción, filtros de búsqueda, cuadrilla de países y tarjetas de servicios.
3. Contacto: formulario validado, información de contacto y mensaje de confirmación.

## Descripción del diseño aplicado (colores, tipografía, distribución)

El diseño usa una paleta clara con acentos verdes y naranjas para generar contraste visual y jerarquía. Para la tipografía se emplea una fuente para contenido general y otra para títulos, mejorando lectura y estructura visual. La distribución se apoya en contenedores centrales, secciones modulares y rejillas de tarjetas para mantener consistencia entre páginas.

## Uso de CSS (externo, organización del archivo, estilos aplicados)

Se utiliza una hoja de estilos externa en assets/css/styles.css. En este archivo se centralizan variables de color, estilos base, componentes reutilizables, estilos de secciones y reglas responsive para dispositivos móviles y escritorio.

## Funcionalidades implementadas con JavaScript

1. Animaciones de entrada mediante IntersectionObserver.
2. Consumo de datos de países usando fetch.
3. Búsqueda en tiempo real por nombre de país.
4. Filtro por región.
5. Paginación incremental con botón de carga adicional.
6. Validación del formulario de contacto.

### Integración de servicios (API)

#### Descripción del servicio web o API utilizada

Se utilizó la API REST Countries con el endpoint:

https://restcountries.com/v3.1/all?fields=name,translations,capital,region,population,currencies,languages,flags

#### Función que cumple dentro del portal

La API suministra la información de países para la sección de destinos. Gracias a ello, el portal muestra contenido real y actualizado sin depender de datos fijos.

#### Explicación general de cómo se integró

1. Al abrir la página de servicios, se ejecuta una solicitud HTTP con fetch.
2. La respuesta JSON se procesa y ordena alfabéticamente.
3. Los datos se almacenan en memoria para aplicar filtros locales sin nuevas peticiones.
4. Los resultados se renderizan dinámicamente en tarjetas dentro de la cuadrilla.
5. Se incluye manejo de errores para fallas de conexión o respuesta.

# DESCRIPCIÓN DEL DESARROLLO

El proyecto se desarrolló por etapas: primero la estructura HTML semántica, luego el diseño CSS y finalmente la lógica JavaScript. Esta secuencia permitió validar cada capa de forma incremental y garantizar una integración estable entre navegación, interfaz y datos.

# EXPLICACIÓN DE LA ESTRUCTURA DEL SITIO WEB

## Páginas creadas

1. index.html
2. servicios.html
3. contacto.html

## Organización de carpetas (HTML, CSS, JS, imágenes)

1. Raíz del proyecto: index.html, servicios.html, contacto.html, DOCUMENTACION.md, PRUEBAS.md.
2. assets/css: styles.css.
3. assets/js: main.js, servicios.js, contacto.js.
4. capturas: evidencias visuales del funcionamiento.

## Tecnologías utilizadas (HTML, CSS, JavaScript)

1. HTML5 para estructura semántica.
2. CSS3 para diseño visual y adaptación responsive.
3. JavaScript (ES6+) para interactividad, validaciones y consumo de API.

# PUBLICACIÓN DEL SITIO WEB

## Plataforma utilizada

Repositorio de código en GitHub y despliegue en Netlify.

## Enlace del sitio web publicado

https://cheery-belekoy-cf6c4d.netlify.app/

# RESULTADOS Y EVIDENCIAS

## Capturas de pantalla del sitio funcionando

Inicio, listado de países y contacto. Las capturas del funcionamiento se encuentran en la carpeta capturas dentro del proyecto.

## Evidencias de pruebas realizadas

1. Navegación entre páginas.
Resultado: correcta transición entre Inicio, Destinos y Contacto.
2. Consumo de REST Countries API.
Resultado: carga de países completada y renderizado de tarjetas.
3. Búsqueda por nombre.
Resultado: filtrado en tiempo real según texto ingresado.
4. Filtro por región.
Resultado: visualización limitada a región seleccionada.
5. Manejo de error de API.
Resultado: mensaje de error mostrado cuando la API no responde.
6. Validación del formulario.
Resultado: bloqueo de envío con campos incompletos.
7. Envío válido del formulario.
Resultado: mensaje de confirmación al usuario.

Las pruebas funcionales están registradas en PRUEBAS.md.

# CONCLUSIÓN PERSONAL

RutaMundo permitió aplicar de manera práctica los fundamentos de desarrollo web front-end en un caso real. La integración de una API pública fortaleció el valor del contenido y mejoró la experiencia de usuario. El despliegue exitoso confirma la viabilidad técnica del proyecto y su correcta implementación de principio a fin.

# REFERENCIAS

GitHub, Inc. (s. f.). GitHub. Recuperado el 1 de junio de 2026, de https://github.com/

MDN Web Docs. (s. f.). Intersection Observer API. Recuperado el 1 de junio de 2026, de https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

Netlify, Inc. (s. f.). Netlify. Recuperado el 1 de junio de 2026, de https://www.netlify.com/

REST Countries. (s. f.). REST Countries API. Recuperado el 1 de junio de 2026, de https://restcountries.com/