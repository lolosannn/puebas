# 100x100 Asado — sitio web

Copia en HTML/CSS/JS puro del diseño de Figma "DISEÑO WEB 100X100" (frame "HOME - DESKTOP").

## Ver el sitio

No requiere build ni instalación. Basta con abrir `index.html` en el navegador, o levantar un servidor estático:

```bash
python3 -m http.server 8000
```

y entrar a `http://localhost:8000`.

## Estructura

```
index.html        Todas las secciones de la página
css/styles.css     Estilos (colores, tipografías y layout de cada sección)
js/script.js       Escalado responsive, acordeón de FAQ y feedback del formulario
assets/images/     Fotos reales (pendiente, ver abajo)
assets/icons/      Íconos y logo reales (pendiente, ver abajo)
```

## Imágenes pendientes

Por una restricción de red de este entorno no fue posible descargar automáticamente las imágenes/íconos reales desde Figma. Todas las fotos e íconos están reemplazados temporalmente por bloques con rayas grises con una etiqueta (clase `.ph`) que indica qué imagen va ahí, por ejemplo:

```html
<div class="ph" data-asset="IMG_5733"></div>
```

Para reemplazar una por la imagen real:

1. Exportá la imagen desde Figma (clic derecho sobre la capa → Export) y guardala en `assets/images/` (fotos) o `assets/icons/` (logo e íconos).
2. Reemplazá el `<div class="ph" ...>` por un `<img>`, por ejemplo:

```html
<img src="assets/images/IMG_5733.jpg" alt="" class="...">
```

(mantené las clases que tenía el div para conservar tamaño/posición, y quitá `ph`/`ph-icon`).
