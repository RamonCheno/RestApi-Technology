
# Master Rest api con express y MongoDB
- El proyecto detalla una API para llevar un control de productos y usuarios mediante registros en la base de datos

## Pre requisitos

- Internet.
- Herramienta de petición HTTP.
- NodeJS Version 20.
- MongoDB.
## Ejecución 

Estas instrucciones te permitiran obtener una copia del proyecto en funcionamiento en tu maquina local para propósitos de desarrollo y prueba.
 
 - Clonar o descargar el repositorio.
 - Abrir un terminal dentro de la carpeta del proyecto y ejecutar el siguiente comando para produccion

    ```bash
    npm i
    ```
    ```bash
    npm run start:prod
    ```
 - Para ejecutarlo en entorno local, ejecuta los siguientes comandos:

    - Convertir de TypeScript a JavaScript
    ```bash
    npm run tsc
    ``` 
    
    - Ejecutar servidor local
    ```bash
    npm run start:dev:local
    ```
## Funcionamiento 

- Para cualquier ejecución, primero se debe lograr y obtener su JWT.
- Utilizar Authorization en el header con su respectivo JWT.
## Documentación

[Documentación de la Api Rest](https://restapi-technology.onrender.com/api/v1/docs)


## Autor

* **Ing. Ramon Cheno**