# Crystal Sands Ride | Documentación del Frontend

## Descripción

Crystal Sands Ride es una plataforma que permite a los visitantes visualizar y reservar viajes a través de Cuba. Esta documentación cubre los aspectos técnicos del frontend desarrollado con Astro.

## 🛠 Tecnologías y Stack

- Frameworks: React + Astro
- Lenguaje: TypeScript
- Estilos: Tailwind CSS + alpinejs
- Gestión de formularios: React Hook Form
- Estado y peticiones: Fetch API
- Package Manager: pnpm

**Internacionalización:** i18n (idiomas: español, inglés)

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

- Listado de paquetes turísticos y recorridos por Cuba.
- Formularios de reserva y traslado con validación.
- Selección de idioma (español, inglés).
- Visualización de destinos con foto, descripción y precio.
- Integración con API para enviar reservas y datos del usuario.

## 🌐 Internacionalización

Se soportan varios idiomas mediante archivos de traducción (i18n). 

### Para añadir más idiomas:

1. Crear un nuevo archivo JSON en la carpeta `src/i18n/literals` con las traducciones.
2. Añadir el nuevo idioma a la lista de lenguajes en `src/i18n/ui.ts`.