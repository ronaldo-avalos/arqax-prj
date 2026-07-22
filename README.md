# ARQAX Arquitectura

Sitio estático del estudio de arquitectura ARQAX, construido con
[Astro](https://astro.build/) y desplegado en GitHub Pages.

## Requisitos

- Node.js `>=18.20.8`

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:4321/arqax-prj/
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve el build de dist/ localmente
```

## Estructura

- `src/pages/index.astro` — página principal (hero + Proyectos destacados)
- `src/layouts/Base.astro` — layout con metadata, OG tags y favicon
- `src/styles/global.css` — estilos del sitio
- `public/` — imágenes y assets estáticos (servidos tal cual)

## Despliegue

El sitio se publica automáticamente en GitHub Pages con cada `push` a `main`
mediante el workflow de `.github/workflows/deploy.yml`.

La URL de producción es:
<https://ronaldo-avalos.github.io/arqax-prj/>

> El `base` está configurado como `/arqax-prj/` en `astro.config.mjs`. Si el
> repositorio cambia de nombre, actualiza `base` y `site` ahí.
