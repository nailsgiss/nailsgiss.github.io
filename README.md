# Nails Giss - Landing Page

Landing page moderna y elegante para Nails Giss, especialista en manicura, pedicura y belleza en Neuquén, Argentina.

## 🚀 Características

- ✨ Diseño moderno con animaciones suaves (Framer Motion)
- 🌓 Modo oscuro/claro con toggle
- 📸 Galería integrada de Instagram
- 💬 Integración con WhatsApp
- 📅 Sistema de reservas por WhatsApp
- 📱 Diseño responsive mobile-first
- 🚀 Optimizado para GitHub Pages

## 🛠️ Tecnologías

- **React 19** - Framework de UI
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS v4** - Framework de estilos utility-first
- **Framer Motion** - Librería de animaciones
- **React Icons** - Iconos
- **react-social-media-embed** - Embeds de Instagram

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🌐 Deployment a GitHub Pages

### Opción 1: Automático con GitHub Actions

El proyecto ya incluye un workflow de GitHub Actions que se ejecuta automáticamente cuando haces push a la rama `main`.

1. Crear cuenta de GitHub con username `nailsgiss`
2. Crear repositorio llamado `nailsgiss.github.io`
3. Hacer push del código:

```bash
git init
git add .
git commit -m "Initial commit: Nails Giss landing page"
git branch -M main
git remote add origin https://github.com/nailsgiss/nailsgiss.github.io.git
git push -u origin main
```

4. El GitHub Action se ejecutará automáticamente y desplegará la página
5. Ir a Settings → Pages → Verificar que está publicado
6. La página estará disponible en `https://nailsgiss.github.io/`

### Opción 2: Manual

```bash
npm run deploy
```

## ✏️ Personalización

### Agregar URLs de Instagram

Editar `src/utils/constants.js` y agregar las URLs de tus posts:

```javascript
export const INSTAGRAM_POSTS = [
  'https://www.instagram.com/p/POST_ID_1/',
  'https://www.instagram.com/p/POST_ID_2/',
  // ... hasta 12 posts
];
```

**Cómo obtener las URLs:**
1. Ir a https://www.instagram.com/nails.giss/
2. Click derecho en cada post → "Copiar enlace"
3. Elegir los 9-12 mejores trabajos

### Agregar tu logo

Opción 1: Reemplazar el placeholder en `src/components/sections/Hero.jsx`

```jsx
<img src="/images/logo.png" alt="Nails Giss" className="w-32 h-32 mx-auto" />
```

Opción 2: Descargar logo del Instagram y agregarlo a `/public/images/logo.png`

### Cambiar colores

Editar `tailwind.config.js` y modificar la paleta `primary`:

```javascript
colors: {
  primary: {
    // Cambiar estos valores
    500: '#tu-color-principal',
  },
}
```

### Editar servicios y precios

Editar `src/utils/constants.js` y modificar el array `SERVICES`.

### Actualizar información de contacto

Editar `src/utils/constants.js` y modificar `BUSINESS_INFO`.

## 📱 Testing

### Testing local
```bash
npm run dev
```

Verificar:
- ✅ Theme toggle funciona
- ✅ Navegación suave entre secciones
- ✅ Botones de WhatsApp abren correctamente
- ✅ Responsive en mobile (375px), tablet (768px), desktop (1440px)
- ✅ Instagram embeds cargan (si configuraste las URLs)
- ✅ Dark mode persiste al recargar

### Build de producción
```bash
npm run build
npm run preview
```

## 📄 SEO

El proyecto incluye:
- Meta tags completos (title, description, keywords)
- Open Graph tags para Facebook/Instagram
- Twitter Card tags
- JSON-LD structured data (schema.org)
- Script para prevenir flash de dark mode

## 🎨 Estructura del Proyecto

```
nails-giss/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── sections/        # Hero, Services, Gallery, Booking, Contact
│   │   ├── ui/              # ThemeToggle, WhatsAppButton
│   │   └── animations/      # ScrollReveal
│   ├── contexts/            # ThemeContext
│   ├── utils/               # constants.js, whatsapp.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/              # Agregar logo e imágenes aquí
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🐛 Troubleshooting

**Error: Instagram embeds no cargan**
- Verificar que las URLs de posts sean correctas
- Verificar que los posts sean públicos
- La librería puede tardar unos segundos en cargar

**Error al hacer deploy**
- Verificar que el nombre del repositorio sea exactamente `nailsgiss.github.io`
- Verificar que `base: '/'` en vite.config.js
- Verificar que GitHub Actions tenga permisos (Settings → Actions → General → Workflow permissions → Read and write)

**Dark mode no funciona**
- Verificar que el script esté en index.html antes del cierre de `</head>`
- Verificar que ThemeProvider esté wrapeando la app en main.jsx

## 📞 Contacto

- Instagram: [@nails.giss](https://instagram.com/nails.giss)
- WhatsApp: +54 9 299 608 5786
- Ubicación: Neuquén, Argentina 🇦🇷🧉

---

Made with 💅 by Claude Code
