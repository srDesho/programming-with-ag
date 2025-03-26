
## Creando un proyecto React con Vite

Vite es una herramienta que simplifica la creación de proyectos web modernos, similar a Spring Boot Initializr para el backend. Nos permite configurar proyectos con dependencias preestablecidas, agilizando el desarrollo frontend.

**Pasos:**

1. **Abre la terminal:** Navega al directorio donde deseas crear tu proyecto.
    
2. **Ejecuta el comando:** Copia y pega desde la página oficial de Vite:
    
    Bash
    
    ```
    npm create vite@latest
    ```
    
3. **Sigue las indicaciones:**
    
    - Confirma la instalación de `create-vite` con "y".
    - Ingresa el nombre del proyecto.
    - Selecciona "React" como framework.
    - Elige "JavaScript" como lenguaje.
4. **Navega al proyecto:** Usa `cd nombre-del-proyecto` (reemplaza con tu nombre).
    
5. **Instala dependencias:** Ejecuta `npm install`.
    
6. **Inicia el servidor:** Abre el proyecto en VSCode, abre la terminal y ejecuta `npm run dev`.
    

**Requisitos:**

- Node.js instalado (versión LTS recomendada).
- Nombres de proyectos y paquetes sin espacios.

**Puntos clave:**

- Vite mejora la velocidad de desarrollo con módulos ES nativos y HMR (Hot Module Replacement).
- La configuración de Vite se personaliza con `vite.config.js`.
- Para más detalles, consulta la [documentación oficial de Vite](https://vitejs.dev/).
