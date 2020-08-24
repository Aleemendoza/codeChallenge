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
curl -H "Content-Type: application/json" -X POST -d '{"client_id": "misentrevistas", "client_secret": "c6a36be30918192c645b5bb87f185054"}' https://api.hiringroom.com/v0/authenticate/login
```

Como obtener la lista de vacantes
---------------------------------

```bash
curl -X GET --header 'Accept: application/json' 'https://api.hiringroom.com/v0/vacancies?listStatus=activa&userId=5767f2bb820cbf846f59de03&page=0&pageSize=20&token={your-access-token}
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
- Node.js
- React

Pero se puede usar la tecnología que creas conveniente.

Documentación del challenge
---------------------------

Para implementar el challenge se usó el stack MERN. Las vacantes seleccionadas de
la Api se almacenan en base de datos Mongodb.

Instalación
-----------

Para ejecutar la aplicación se deben seguir los siguientes pasos:

- Clonar repositorio
- Instalar dependencias con `npm i`
- Iniciar mongodb
- Antes de iniciar la aplicación es necesario generar el token de acceso
tal como se explica en este documento. Esto se debe a que cada token tiene
una duración prestablecida, por lo que no sería conveniente almacenarlo dentro
de la aplicación.
Luego de generar el token, iniciar la aplicación con:

```bash
npm run development -- token={your-access-token}
```
Uso de la aplicación
--------------------

Al iniciar, se crea de forma predeterminada el usuario admin, el cual posee
las credenciales `admin@navent.com / admin`. La aplicación no posee funciones de
administración de usuarios. Es importante también destacar que la aplicación no cuenta
con persistencia de usuario (cookie, session id, token, etc.) por lo que el usuario
logueado solamente permanece en memoria.

Luego de ingresar, se presenta la vista Home. Para comenzar a cargar la lista personalizada,
se debe ingresar a la opción **SELECCIONAR VACANTES**. Allí se listan las vacantes procedentes
de la Api. Es posible realizar búsquedas por fecha y estado. Los resultados se pueden paginar
y ordenar por cada uno de los campos mostrados.

Validación de fechas
--------------------

Antes de realizar búsquedas, la aplicación valida las fechas ingresadas controlando:

- Fechas válidas (DD-MM-YYYY)
- Fecha desde <= Fecha hasta
- Diferencia entre fecha hasta y fecha desde no mayor a 7 días

Tratamiento de errores
----------------------

Si bien se realizan validaciones antes de realizar búsquedas, la aplicación está preparada
para contemplar errores emitidos por la Api. Por ejemplo, la lista **Estado** tiene la opción
`Todos` la cual no es aceptada como válida por la Api, por lo que al seleccionarla, la aplicación
muestra el error devuelto.

Agregando vacantes a la lista personalizada
-------------------------------------------

Una vez que se tienen vacantes en la lista, es posible enviarlas a la lista personalizada seleccionando
una o más (o todas) y luego pulsando *SELECCIONAR* o *DESCARTAR*, para agregarla o removerla de la lista.
Luego se muestra un mensaje indicando la cantidad de ítems procesados, agregando una marca *En lista* correspondiente.
Es importante mencionar que en la lista se almacenan *copias* de los registros originales de la Api, por lo que
cuando se modifiquen esos registros, los cambios *no* se verán reflejados en la lista.

La lista personalizada
----------------------

Finalmente, visitando la opción **LISTA DE VACANTES** se visualizan las vacantes antes seleccionadas.

Endpoint público
----------------

La lista de vacantes está disponible en el endpoint **GET** `/api/selected/:output`, donde `output = [json | xml]`,
siendo `json` la opción por defecto.

Aplicación del lado del cliente
-------------------------------

La aplicación del lado del cliente se implementó con ReactJs. Como no se incluyó server-side rendering, la única forma de 
acceder directamente a la aplicación es a través de `localhost:3000/`.
