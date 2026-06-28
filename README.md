# RE-INVENT 🚀

> Diseñamos y desarrollamos soluciones digitales innovadoras que impulsan el crecimiento y la eficiencia de tu negocio con tecnología de vanguardia.

Bienvenidos al repositorio principal de la landing page y plataforma web de **RE-INVENT**. Somos el estudio referente en transformar ideas en soluciones digitales y marcas estratégicas que destacan por su simplicidad y preparación para el futuro.

## 🛠️ Stack Tecnológico

Este proyecto está construido con un stack moderno enfocado en alto rendimiento, tipado estricto y una experiencia de usuario excepcional:

### Frontend
- **[React 19](https://react.dev/)**: Biblioteca principal para interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Entorno de desarrollo ultrarrápido y bundler.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitario para un diseño moderno y responsivo.
- **[Framer Motion](https://www.framer.com/motion/)**: Animaciones fluidas y potentes.
- **[TanStack Router](https://tanstack.com/router/latest)**: Enrutamiento con seguridad de tipos (Type-safe).
- **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)**: Iconografía ligera y escalable.

### Backend & Base de Datos
- **[Bun](https://bun.sh/)**: Entorno de ejecución JavaScript all-in-one increíblemente rápido.
- **[Hono](https://hono.dev/)**: Framework web ultraligero y rápido para el backend.
- **[PostgreSQL](https://www.postgresql.org/)**: Motor de base de datos relacional.
- **[Drizzle ORM](https://orm.drizzle.team/)**: ORM moderno, ligero y fuertemente tipado.
- **[Zod](https://zod.dev/)**: Validación y declaración de esquemas.

---

## 🚀 Inicio Rápido

Sigue estos pasos para levantar el entorno de desarrollo local.

### Prerrequisitos
Asegúrate de tener instalado [Bun](https://bun.sh/) en tu sistema.

### Instalación

1. Clona el repositorio e instala las dependencias:
```bash
bun install
```

2. Configura tus variables de entorno (Asegúrate de crear tu archivo `.env` basado en un `.env.example` si existe, con tus credenciales de base de datos PostgreSQL).

3. Inicia el servidor de desarrollo (Levanta simultáneamente el servidor backend de Bun y el frontend de Vite):
```bash
bun run dev
```

La aplicación estará disponible típicamente en `http://localhost:5173`.

### Comandos de Base de Datos (Drizzle)

Generar migraciones basadas en tu esquema:
```bash
bun run db:generate
```

Empujar cambios directamente a la base de datos (Ideal para desarrollo):
```bash
bun run db:push
```

### Construcción para Producción

Para compilar TypeScript y empaquetar el frontend con Vite:
```bash
bun run build
```

---

## 📁 Estructura del Proyecto

```text
06-Reinvent/
├── drizzle/              # Migraciones y metadatos de Drizzle ORM
├── public/
│   ├── assets/           # Imágenes estáticas y recursos visuales
│   └── favicon_io/       # Iconos de la aplicación web
├── src/
│   ├── components/       # Componentes reutilizables de React (Header, Footer, Hero, etc.)
│   ├── routes/           # Rutas del frontend (TanStack Router)
│   ├── server/           # Lógica del backend (Hono + Bun)
│   │   ├── db/           # Configuración de BD y esquemas de Drizzle
│   │   └── index.ts      # Punto de entrada del servidor
│   ├── shared/           # Código compartido (ej. schemas de Zod)
│   ├── index.css         # Estilos globales y configuración
│   ├── main.tsx          # Punto de entrada de React
│   └── routeTree.gen.ts  # Rutas generadas automáticamente
├── .env                  # Variables de entorno
├── biome.json            # Configuración del linter y formateador Biome
├── docker-compose.yml    # Configuración de contenedores (ej. PostgreSQL)
├── drizzle.config.ts     # Configuración de Drizzle ORM
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── vite.config.ts        # Configuración de Vite
```

## 🤝 Contribución

Si deseas contribuir a este proyecto, asegúrate de crear una rama desde `main`, seguir los estándares de código definidos (como Biome) y abrir un Pull Request describiendo detalladamente tus cambios.

---
*Desarrollado con pasión por el equipo de **RE-INVENT**.* 💡
