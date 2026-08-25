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
js/script.js       Escalado responsive, acordeón de FAQ, formulario y carga automática de imágenes
images/            Acá van todas las fotos e íconos reales
```

## Cómo cargar las imágenes (sin tocar código)

Todas las fotos e íconos están hoy reemplazados por bloques grises con una etiqueta. El sitio ya viene preparado para detectar automáticamente cualquier imagen que pongas en la carpeta `images/` — solo tenés que guardarla con el **nombre exacto** de la tabla de abajo (podés usar `.jpg`, `.jpeg`, `.png` o `.webp`, con eso alcanza). Apenas la subís y recargás la página, el bloque gris se reemplaza solo por tu foto. No hace falta editar ningún archivo.

| Nombre de archivo (en `images/`) | Qué imagen va ahí |
|---|---|
| `logo-100x100-asado.jpg` | Logo de 100x100 Asado (aparece en el header y el footer) |
| `instagram.jpg` | Ícono de Instagram |
| `tiktok.jpg` | Ícono de TikTok |
| `whatsapp.jpg` | Ícono de WhatsApp |
| `foto-hero.jpg` | Foto grande de fondo del hero (portada) |
| `icono-fuego.jpg` | Ícono "Ritual del fuego argentino" |
| `icono-carne.jpg` | Ícono "Materia prima premium" |
| `icono-equipo.jpg` | Ícono "Equipo profesional" |
| `icono-organizacion.jpg` | Ícono "Organización y responsabilidad" |
| `img-4925.jpg` | Foto de la mesa servida (Propuesta Gastronómica) |
| `foto-collage-1.jpg` … `foto-collage-12.jpg` | Las 12 fotos del collage de fondo en "Nuestro servicio" |
| `img-6206.jpg` | Foto chica junto a "Personal & Montaje" (también se reutiliza en la Galería) |
| `img-5951.jpg` | Foto chica junto a "Personal & Montaje" (también se reutiliza en la Galería) |
| `img-2043.jpg` | Foto rotada en "Nosotros" |
| `img-6630.jpg` | Foto rotada en "Nosotros" |
| `img-8585.jpg` | Foto en "Nosotros" |
| `gonzalo-hileni.jpg` | Retrato de Gonzalo Hileni |
| `mapa-patagonia-fondo.jpg` | Imagen de fondo de la sección Presupuesto |
| `icono-reloj.jpg` | Ícono de "Propuesta personalizada / Te respondemos en 24 hs" |
| `img-5733.jpg` | Foto de la Galería |
| `img-5307.jpg` | Foto de la Galería (también se reutiliza en "Comunidad") |
| `img-8156.jpg` | Foto de la Galería |
| `img-7930.jpg` | Foto de la Galería |
| `img-2063.jpg` | Foto de la Galería |
| `img-6374.jpg` | Foto de la Galería |
| `img-7972.jpg` | Foto de un referente/cliente |
| `img-4557.jpg` | Foto de un referente/cliente |
| `img-6286.jpg` | Foto de un referente/cliente |
| `img-7458.jpg` | Foto de un referente/cliente |

**Tip:** si no tenés claro qué nombre le corresponde a cada foto, abrí `index.html` con el navegador — cada bloque gris muestra su propia etiqueta abajo a la izquierda (por ejemplo "IMG_5733"), que corresponde a la fila de la tabla de arriba.
