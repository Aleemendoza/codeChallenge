# Hiringroom -  Fullstack Code Challenge

Objetivo
---------

El objetivo de este desafío es generar un sistema de moderación de vacantes donde se puedan buscar y seleccionar una lista de vacantes para después puedan ser accedidas desde un endpoint publico.

Descripción
-----------

A. Generar un sistema de autenticación para poder acceder al sistema

B. Buscar las vacantes disponibles desde el api público de hiringroom.

C. Dentro del sistema poder filtrar las vacantes por fecha, estado y paginado.

D. Seleccionar y remover las vacantes de la lista que nos interesa publicar. Esa vacantes seleccionadas debe ser guardada para futuros cambios.

E. Crear un endpoint público que responda la lista de vacantes seleccionadas en formato xml y json.

    E.1. Los campos de la vacante para publicar en el endpoint son
        - nombre
        - area
        - subarea
        - fechaCierre
        - ubicacion
        - salarioOfrecido
        - requisitos
        - beneficios
        - descripcionEmpresa

Instrucciones
--------------

1. Clonar el repositorio.
2. Crear un branch llamado `dev`.
3. Escribir el código en varios commits. Nos interesa saber como va resolviendo los problema durante el desafío.
4. Cuando termines el desafio, genera un pull request con las explicaciones para iniciar el proyecto, como acceder al menu de vacantes y al endpoint publico de vacantes.

Como acceder al api de https://api.hiringroom.com/
--------------------------------------

Para este desafío vamos a usar el endpoint de vacantes por estado, para acceder a este endpoint necesitamos un token de autenticación el cual se puede obtener de la siguiente manera.

```bash
curl -H "Content-Type: application/json" -X POST -d '{"client_id": "misentrevistas", "client_secret": "misentrevistas"}' https://api.hiringroom.com/v0/authenticate/login
```

Como obtener la lista de vacantes
---------------------------------

```bash
curl -X GET --header 'Accept: application/json' 'https://api.hiringroom.com/v0/vacancies?listStatus=activa&userId=5767f2ce820cbfb46f59de04&page=0&pageSize=20&token={your-access-token}
```

Descripción del endpoint de vacante
-----------------------------------

`GET` https://api.hiringroom.com/v0/vacancies
> Obtiene una lista de vacantes segun los criterios de busqueda

### Parámetros

- `listStatus`: Listado de estatus de la vacante separados por coma. Si no se especifica ninguno, devuelve todas las vacantes. Status disponibles: [activa/cerrada/cubierta/confidencial/espontanea]

- `userId`:  Identificador del usuario

- `status`: estado de la vacante en ese momento (activa/cerrada/cancelada)

- `resp`: {xml,json} : Formato de respuesta, json por defecto

- `page`: (opcional) numero de pagina para el paginador

- `pageSize`: (opcional) límite de postulantes por página para el paginador (min 10, max 100)

- `token` : Token de acceso a la aplicación

Tecnologias
-----------

El stack actual de hiringroom es el siguiente

- PHP 5.6
- Codeigniter 2
- Mongodb
- Jquery
- Bootstrap
- Angular

Pero se puede usar la tecnología que creas conveniente.
