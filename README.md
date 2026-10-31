# Entrega 1 - Administrador de Servicios

Proyecto Node.js (ESM) con una clase `ServiceManager` que gestiona en memoria los servicios de un consultorio odontológico para un sistema de turnos y reservas.

## Instalación

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto (se puede usar `.env.example` como plantilla).

## Ejecución

```bash
node src/server.js
```

Imprime en consola el puerto configurado.

> Estado actual: `src/server.js` importa `./config/env.config.js`, pero el archivo de configuración se llama `src/config/config.js`. Hasta que coincidan los nombres, la ejecución falla con `ERR_MODULE_NOT_FOUND`.

## Variables de entorno

| Variable   | Descripción                                             | Ejemplo       |
|------------|---------------------------------------------------------|---------------|
| `PORT`     | Puerto de la aplicación. Si no está definida, usa 8080  | `8080`        |
| `NODE_ENV` | Entorno de ejecución (definida en `.env`, aún no usada) | `development` |

## Estructura

```
src/
  server.js
  config/config.js
  managers/ServiceManager.js
.env
.env.example
gitignore
package.json
```

## Recurso `services`

Cada servicio tiene esta forma:

```js
{
  id: 1,
  name: "Extraccion de diente",
  precio: 4000,
  tiempo: 5000,
  descripcion: "extraccion simple de muelas de juicio"
}
```

| Campo         | Descripción                                                          |
|---------------|----------------------------------------------------------------------|
| `id`          | Identificador. El servicio inicial usa `1`; los nuevos usan un UUID  |
| `name`        | Nombre del servicio                                                  |
| `precio`      | Precio                                                               |
| `tiempo`      | Duración                                                             |
| `descripcion` | Descripción del servicio                                             |

Los servicios viven solo en memoria: se pierden al terminar el proceso. El manager arranca con un servicio inicial.

## Métodos de `ServiceManager`

La clase está definida en `src/managers/ServiceManager.js` y todavía no se exporta, por lo que no se puede importar desde otros archivos. Los ejemplos suponen una instancia `manager = new ServiceManager()`.

### `getServices()`
Devuelve el arreglo con todos los servicios.

```js
manager.getServices();
```

### `getServicesById(id)`
Devuelve el servicio con ese `id`, o `undefined` si no existe.

```js
manager.getServicesById(1);
```

### `createServices(name, precio, tiempo, descripcion)`
Crea un servicio con un `id` generado (UUID), lo agrega a la lista y lo devuelve. Recibe los datos como parámetros sueltos y no valida que estén presentes.

```js
manager.createServices("Placa Dental", 15000, 200, "placa de relajacion para bruxismos");
```

### `updateServices(id, data)`
Devuelve una copia del servicio con los campos de `data` aplicados, o `null` si no existe. No guarda el cambio en la lista ni protege el `id`.

```js
manager.updateServices(1, { precio: 200 });
```

### `deleteService(id)`
Elimina el servicio de la lista. Devuelve un arreglo con el servicio eliminado, o `null` si no existe.

```js
manager.deleteService(1);
```
