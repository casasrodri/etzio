# Demo

El presente repositorio contiene el código fuente del prototipo de un sistema de gestión de auditorías internas de entidades financieras. El mencionado prototipo fue elaborado como parte del Trabajo Final de Grado de la carrera de Ingeniería en Software de la Universidad Empresarial Siglo 21.

A continuación se exponen los pasos secuenciales necesarios para descargar el proyecto y ejecutar la aplicación de forma local.

## Instructivo

### Requerimientos

* [Node.js](https://nodejs.org/es/download) (v. 18.16.1 o superior)
* [Git](https://git-scm.com/downloads) [Opcional]

### Descarga del repositorio

Para obtener el código fuente del prototipo, se deberá seguir alternativamente alguno de los siguientes pasos:

1. En caso de tener Git instalado, abrir la terminal de comandos, navegar hasta la carpeta deseada, y ejecutar el comando:

    ```sh
    git clone https://github.com/casasrodri/etzio.git
    ```

2. Ingresando a <https://github.com/casasrodri/etzio/tree/demo>, y hacer click en el botón `Code` y luego `Download ZIP`. A continuación descomprimir el archivo en la carpeta elegida.

### Inicio de la aplicación

1. Navegar a la carpeta denominada *frontend*, ejecutando el siguiente comando:

    ```sh
    cd frontend
    ```

2. Iniciar el servidor de desarrollo para visualizar la aplicación en el navegador:

    ```sh
    npm run dev
    ```

3. Ingresar a la página indicada en la consola para visualizar la aplicación. Por defecto se muestra en el puerto 5173, siendo la url la siguiente: <http://localhost:5173>, pero podría asignarse otro puerto en caso de estar ocupado el mismo.
