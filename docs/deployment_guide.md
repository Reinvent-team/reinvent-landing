# Guía de Despliegue (Railway y Vercel)

Esta guía te ayudará a desplegar el **Backend en Railway (gratis)** y conectar tu **Frontend en Vercel**.

## 1. Despliegue del Backend en Railway

El backend está configurado para ejecutarse con **Bun**. Railway lo detectará automáticamente gracias a los archivos `bun.lock` y `package.json`.

### Paso 1: Subir el Backend a GitHub
Asegúrate de que la carpeta de tu backend (`06-Reinvent-Backend`) esté subida a un repositorio en tu cuenta de GitHub.

### Paso 2: Crear el Proyecto en Railway
1. Inicia sesión en [Railway.app](https://railway.app/).
2. Haz clic en **"New Project"** -> **"Deploy from GitHub repo"**.
3. Selecciona el repositorio de tu backend.
4. *Si tu backend está en una subcarpeta de un monorepo*, ve a los "Settings" (Ajustes) del servicio recién creado en Railway, y en la sección **"Root Directory"**, escribe `/06-Reinvent-Backend` (o el nombre de la carpeta donde esté el backend).

### Paso 3: Añadir la Base de Datos PostgreSQL
1. En tu proyecto de Railway, haz clic en **"New"** -> **"Database"** -> **"Add PostgreSQL"**.
2. Railway creará una base de datos.
3. Haz clic en el servicio de PostgreSQL, ve a la pestaña **Variables** y copia el valor de `DATABASE_URL`.

### Paso 4: Configurar Variables de Entorno en el Backend
Vuelve al servicio de tu aplicación Backend en Railway, ve a la pestaña **"Variables"** y añade:
- `DATABASE_URL`: Pega aquí el valor que copiaste en el paso anterior.
- `RESEND_API_KEY`: Pega aquí tu API key de Resend.

### Paso 5: Desplegar la Base de Datos (Migraciones)
Una vez que el backend esté corriendo, necesitas empujar el esquema a la base de datos. En Railway:
1. Asegúrate de tener configurado un comando de build si es necesario. (Railway usa automáticamente `bun install`).
2. Para aplicar las migraciones, ve a la terminal de tu máquina local, asegúrate de que el `.env` local tenga la `DATABASE_URL` de Railway, y ejecuta:
   ```bash
   bun run db:push
   ```
   *(También puedes configurarlo para que se ejecute en el comando de pre-start, pero manualmente funciona bien para la primera vez).*

### Paso 6: Obtener la URL Pública del Backend
En el servicio de tu aplicación Backend, ve a la pestaña **"Settings"** -> **"Networking"** y haz clic en **"Generate Domain"**. 
Copia ese dominio generado (ej. `https://tu-backend.up.railway.app`).

---

## 2. Configuración del Frontend en Vercel

Tu frontend ya está desplegado en Vercel (`https://reinvent-landing.vercel.app/`), pero necesita saber cómo conectarse a tu nuevo Backend en Railway.

### Paso 1: Variables de Entorno en Vercel
1. Ve a tu proyecto en Vercel.
2. Navega a **"Settings"** -> **"Environment Variables"**.
3. Añade una nueva variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Pega aquí la URL pública de tu backend en Railway (ej. `https://tu-backend.up.railway.app` - asegúrate de no poner `/` al final).
4. Dale a **Save**.

### Paso 2: Redesplegar en Vercel
Para que Vercel tome los cambios de la nueva variable de entorno:
1. Ve a la pestaña **"Deployments"** en Vercel.
2. En tu último despliegue, haz clic en los tres puntos (`...`) y selecciona **"Redeploy"**.

### Verificación
El frontend (`https://reinvent-landing.vercel.app/`) ya está configurado (en el archivo `ContactModal.tsx` hemos verificado que usa `import.meta.env.VITE_API_URL`). Y el backend en Railway tiene permitido tu dominio de Vercel en la configuración de CORS.

¡Todo debería funcionar correctamente al enviar el formulario!
