# Despliegue en GitHub Pages

## Configuración completada

El proyecto ya está configurado para desplegarse automáticamente en GitHub Pages. Los siguientes archivos han sido configurados:

### 1. Configuración de Vite (`vite.config.ts`)
- `base: '/Mega-Barto.github.io/'` - Base URL para GitHub Pages
- `outDir: 'dist'` - Directorio de salida
- `assetsDir: 'assets'` - Directorio de assets

### 2. Scripts de package.json
- `predeploy`: Construye el proyecto usando Bun
- `deploy`: Despliega usando gh-pages
- `preview:dist`: Preview local del build

### 3. GitHub Actions (`.github/workflows/deploy.yml`)
- Se ejecuta automáticamente en push a `main`
- Usa Bun para instalar dependencias y construir
- Despliega automáticamente a GitHub Pages
- Configura el dominio personalizado `megabarto.rocks`

### 4. Archivos de configuración de GitHub Pages
- `public/.nojekyll` - Evita procesamiento Jekyll
- `public/CNAME` - Configuración del dominio personalizado

## Comandos disponibles

```bash
# Desarrollo local
bun run dev

# Construir para producción
bun run build

# Preview local del build
bun run preview:dist

# Desplegar manualmente (opcional, GitHub Actions lo hace automáticamente)
bun run deploy
```

## Proceso de despliegue

1. **Automático**: Cada push a la rama `main` despliega automáticamente
2. **Manual**: Ejecutar `bun run deploy` para desplegar manualmente

## URLs
- **Desarrollo**: http://localhost:5173
- **Preview local**: http://localhost:4173
- **Producción**: https://megabarto.rocks
- **GitHub Pages**: https://mega-barto.github.io/Mega-Barto.github.io/

## Configuración de GitHub

Asegúrate de que en la configuración del repositorio en GitHub:
1. Ve a Settings > Pages
2. Source: GitHub Actions
3. Custom domain: megabarto.rocks (si usas dominio personalizado)
