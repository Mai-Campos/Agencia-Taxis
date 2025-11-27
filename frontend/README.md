# Crystal Sands Ride | Documentación del Frontend

## 📖 Descripción general

Crystal Sands Ride es sitio de contenido estático, desarrollada con Astro y React, con soporte para múltiples idiomas. La web permite a los visitantes visualizar y reservar viajes a través de Cuba. Esta documentación cubre los aspectos técnicos del frontend.

## 🛠 Tecnologías y Stack

- **Frameworks:** React + Astro
- **Lenguaje:** TypeScript
- **Estilos y animaciones:** Tailwind CSS + alpinejs
- **Gestión de formularios:** React Hook Form
- **Estado y peticiones:** Fetch API
- **Package Manager:** pnpm

## 📂 Estructura del proyecto

```
src/
 ├─ api/             # Funciones para consumir API externa
 ├─ components/      # Componentes reutilizables (formularios, botones, cards)
 ├─ content/         # Collección de datos estáticos (paquetes, servicios)
 ├─ i18n/            # Archivos de traducciones
 ├─ layouts/         # Layout principal (BaseLayout)
 ├─ pages/           # Páginas principales
 ├─ styles/          # Estilos globales
```

## 🚀 Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/web-viajes-cuba-frontend.git

cd web-viajes-cuba-frontend
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Ejecutar servidor de desarrollo:

```bash
pnpm dev
```

4. Abrir en el navegador: **http://localhost:4321**

## ⚡ Funcionalidades principales

- Listado de paquetes de recorridos por Cuba.
- Formularios de reserva y traslado con validación.
- Selección de idioma (español, inglés).
- Visualización de destinos con foto, descripción y precio.
- Integración con API para enviar reservas y datos del usuario.

## 🌐 Internacionalización

Se soportan varios idiomas mediante archivos de traducción.

### Añadir más idiomas:

1. Añadir nuevo idioma a `astro.config.mjs`.
2. Crear un nuevo archivo JSON en la carpeta `src/i18n/literals` con las traducciones.
3. Añadir nuevo idioma a las listas de lenguajes en `src/i18n/ui.ts`.
4. Añadir nuevas colecciones en `src/content/` con el nuevo idioma.
5. Añadir nuevo idioma con icono a `src/components/ui/LanguagePicker.astro`.

## Colecciones de datos

Las colecciones de datos se encuentran en `src/content/` y contienen información estática sobre paquetes de recorridos turísticos y servicios. Cada colección está estructurada por idioma para facilitar la internacionalización.

### Añadir nuevos archivos de colección:

1. Crear un nuevo archivo de colección por cada idioma en `src/content/:collection/:lang/`
2. Seguir la estructura y sintáxis existente en las colecciones actuales.
