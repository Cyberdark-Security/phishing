# Entrenador Anti-Phishing 🛡️

Este es un simulador educativo diseñado para ayudar a los usuarios a identificar intentos de phishing y diferenciar correos electrónicos legítimos de los maliciosos.

## Características

- **Simulación Realista**: Presenta diversos escenarios de correos electrónicos comunes.
- **Retroalimentación Inmediata**: Explica por qué un correo es considerado phishing o legítimo.
- **Seguridad por Diseño**: Implementa mejores prácticas de seguridad para prevenir vulnerabilidades comunes.

## Cómo empezar

1. Abre `index.html` en tu navegador favorito.
2. Lee cada escenario de correo electrónico.
3. Decide si crees que es phishing o legítimo.
4. Revisa tus resultados al final para aprender y mejorar tus habilidades.

## Auditoría de Seguridad y Mejoras Realizadas

Como parte de una auditoría de seguridad, se han implementado las siguientes mejoras:

1. **Separación de Responsabilidades**: El código se ha modularizado dividiendo el HTML (`index.html`), CSS (`styles.css`) y JavaScript (`app.js`).
2. **Prevención de XSS**: Se eliminó el uso de `innerHTML` en favor de `textContent` y manipulación segura del DOM (`createElement`, `appendChild`).
3. **Política de Seguridad de Contenido (CSP)**: Se añadió una etiqueta `<meta>` de CSP para restringir el origen de los recursos y mitigar ataques de inyección.
4. **Seguridad en Eventos**: Se eliminaron los manejadores de eventos en línea (`onclick`) y se reemplazaron por escuchadores de eventos en JavaScript (`addEventListener`).

## Ideas para Protección Futura

Para elevar aún más el nivel de protección y robustez del proyecto, se sugieren las siguientes ideas:

- **Uso de Frameworks Modernos**: Migrar a React, Vue o Svelte para aprovechar su sanitización automática del DOM.
- **Validación en Servidor**: Si se recogen estadísticas de los usuarios, implementar validación y saneamiento estricto en el lado del servidor.
- **Pruebas Automatizadas**: Implementar pruebas unitarias y de integración para asegurar que la lógica de seguridad no se rompa con cambios futuros.
- **Análisis Estático de Código (SAST)**: Integrar herramientas como ESLint con plugins de seguridad para detectar patrones peligrosos durante el desarrollo.
- **Integración de Subresource Integrity (SRI)**: Si se utilizan librerías externas vía CDN, usar hashes SRI para garantizar que los archivos no han sido manipulados.

## Licencia

Este proyecto es de código abierto y está disponible para fines educativos.
