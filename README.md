1. Configuración Inicial de la Aplicación
Archivo de configuración principal (app.js o index.js)
Este archivo configura y ejecuta el servidor Express. Aquí es donde se importa y configura el servidor Express, las rutas de la API, y se hace la conexión con la base de datos.

Configuración básica de Express:

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql2 from 'mysql2/promise';  

const app = express();

app.use(bodyParser.json());
app.use(cors()); 


import usuarioRoutes from './routes/usuarioRoutes.js';
import ubicacionActivoRoutes from './routes/ubicacionActivoRoutes.js';
import edificioRoutes from './routes/edificioRoutes.js';
import pisoRoutes from './routes/pisoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';
import sectorRoutes from './routes/sectorRoutes.js';
import operarioRoutes from './routes/operarioRoutes.js';
import activoRoutes from './routes/activoRoutes.js';
import activoTareaRoutes from './routes/activoTareaRoutes.js';
import ordenTrabajoRoutes from './routes/ordenTrabajoRoutes.js';
import administrativoRoutes from './routes/administrativoRoutes.js';


app.use('/api/usuarios', usuarioRoutes);
app.use('/api/ubicacion-activo', ubicacionActivoRoutes);
app.use('/api/edificio', edificioRoutes);
app.use('/api/piso', pisoRoutes);
app.use('/api/tarea', tareaRoutes);
app.use('/api/sector', sectorRoutes);
app.use('/api/operario', operarioRoutes);
app.use('/api/activo', activoRoutes);
app.use('/api/activo-tarea', activoTareaRoutes);
app.use('/api/orden-trabajo', ordenTrabajoRoutes);
app.use('/api/administrativo', administrativoRoutes);


const db = await mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nombre_de_base_de_datos',
});

export { app, db };


2. Rutas de Usuario (/usuarios)
GET /lista-usuarios
Descripción: Obtiene una lista de todos los usuarios registrados.
Controlador: Usuarios
Respuesta: Array de usuarios.

POST /register
Descripción: Registra un nuevo usuario.
Controlador: CrearUsuario
Cuerpo de la solicitud:

{
  "nombre": "string",
  "apellido": "string",
  "email": "string",
  "contraseña": "string",
  "area": "string"
}

POST /login
Descripción: Permite a un usuario iniciar sesión.
Controlador: UsuarioLogin
Cuerpo de la solicitud:

{
  "email": "string",
  "contraseña": "string"
}

GET /operarios
Descripción: Obtiene la lista de operarios.
Controlador: getOperarios
Respuesta: Array de operarios.

2. Rutas de Ubicación de Activo (/ubi-activo)
GET /lista-ubi-activos
Descripción: Obtiene todas las ubicaciones de activos.
Controlador: UbicacionesActivos
Respuesta: Array de ubicaciones de activos.

GET /ubi-activo/
Descripción: Obtiene una ubicación específica de activo.
Controlador: UbicacionActivoId
Respuesta: Detalles de la ubicación del activo.

POST /ubi-activo
Descripción: Crea una nueva ubicación de activo.
Controlador: createUbicacionActivo
Cuerpo de la solicitud:

{
  "activo_id": "number",
  "sector": "string",
  "ubicacion": "string"
}

DELETE /ubi-activo/
Descripción: Elimina una ubicación de activo específica.
Controlador: deleteUbicacionActivoById

3. Rutas de Edificio (/edificio)
GET /lista-edificios
Descripción: Obtiene todos los edificios.
Controlador: Edificios
Respuesta: Array de edificios.

GET /edificio/
Descripción: Obtiene un edificio específico por ID.
Controlador: EdificioId
Respuesta: Detalles del edificio.

POST /edificio
Descripción: Crea un nuevo edificio.
Controlador: createEdificio
Cuerpo de la solicitud:

{
  "nombre": "string",
  "direccion": "string",
  "descripcion": "string"
}
DELETE /edificio/
Descripción: Elimina un edificio específico por ID.
Controlador: deleteEdificioById

PUT /edificio/
Descripción: Actualiza un edificio específico por ID.
Controlador: updateEdificioById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "direccion": "string",
  "descripcion": "string"
}

4. Rutas de Piso (/piso)
GET /lista-pisos
Descripción: Obtiene todos los pisos.
Controlador: Pisos
Respuesta: Array de pisos.

GET /piso/
Descripción: Obtiene un piso específico por ID.
Controlador: PisoId
Respuesta: Detalles del piso.

POST /piso
Descripción: Crea un nuevo piso.
Controlador: createPiso
Cuerpo de la solicitud:

{
  "nombre": "string",
  "edificio_id": "number",
  "descripcion": "string"
}

DELETE /piso/
Descripción: Elimina un piso específico por ID.
Controlador: deletePisoById

PUT /piso/
Descripción: Actualiza un piso específico por ID.
Controlador: updatePisoById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "edificio_id": "number",
  "descripcion": "string"
}

5. Rutas de Sector (/sector)
GET /sectores
Descripción: Obtiene todos los sectores.
Controlador: Sectores
Respuesta: Array de sectores.

GET /sector/
Descripción: Obtiene un sector específico por ID.
Controlador: SectorId
Respuesta: Detalles del sector.

POST /sector
Descripción: Crea un nuevo sector.
Controlador: createSector
Cuerpo de la solicitud:

{
  "nombre": "string",
  "piso_id": "number",
  "descripcion": "string"
}

DELETE /sector/
Descripción: Elimina un sector específico por ID.
Controlador: deleteSectorById

PUT /sector/
Descripción: Actualiza un sector específico por ID.
Controlador: updateSectorById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "piso_id": "number",
  "descripcion": "string"
}

6. Rutas de Tarea (/tarea)
GET /tareas
Descripción: Obtiene todas las tareas.
Controlador: Tareas
Respuesta: Array de tareas.

GET /tareas/
Descripción: Obtiene una tarea específica por ID.
Controlador: TareaId
Respuesta: Detalles de la tarea.

POST /tareas
Descripción: Crea una nueva tarea.
Controlador: createTarea
Cuerpo de la solicitud:

{
  "nombre": "string",
  "descripcion": "string"
}

DELETE /tareas/
Descripción: Elimina una tarea específica por ID.
Controlador: deleteTareaById

PUT /tareas/
Descripción: Actualiza una tarea específica por ID.
Controlador: updateTareaById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "descripcion": "string"
}

7. Rutas de Activo (/activo)
GET /activos
Descripción: Obtiene todos los activos.
Controlador: Activos
Respuesta: Array de activos.

GET /activo/
Descripción: Obtiene un activo específico por ID.
Controlador: ActivoId
Respuesta: Detalles del activo.

POST /activo
Descripción: Crea un nuevo activo.
Controlador: createActivo
Cuerpo de la solicitud:

{
  "nombre": "string",
  "tipo": "string",
  "estado": "string"
}

DELETE /activo/
Descripción: Elimina un activo específico por ID.
Controlador: deleteActivoById

PUT /activo/
Descripción: Actualiza un activo específico por ID.
Controlador: updateActivoById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "tipo": "string",
  "estado": "string"
}

8. Rutas de Activo-Tarea (/activoTarea)
GET /activoTareas/
Descripción: Obtiene todas las tareas asociadas a un activo.
Controlador: ActivoTareas
Respuesta: Array de tareas de un activo.

GET /activoTareas/
Descripción: Obtiene una tarea específica asociada a un activo.
Controlador: ActivoTareaId
Respuesta: Detalles de una tarea asociada al activo.

9. Rutas de Orden de Trabajo (/orden-trabajo)
GET /ordenes-trabajo
Descripción: Obtiene todas las órdenes de trabajo.
Controlador: OrdenesTrabajo
Respuesta: Array de órdenes de trabajo.

GET /orden-trabajo/
Descripción: Obtiene una orden de trabajo específica por ID.
Controlador: OrdenTrabajoId
Respuesta: Detalles de la orden de trabajo.

POST /orden-trabajo
Descripción: Crea una nueva orden de trabajo.
Controlador: createOrdenTrabajo
Cuerpo de la solicitud:

{
  "operario": "string",
  "nombre": "string",
  "fecha": "string",
  "sector": "string",
  "edificio": "number",
  "activo": "string",
  "ubicacion": "string",
  "piso": "number",
  "tipoActivo": "string",
  "solicitante": "string",
  "instrucciones": "string",
  "activo_tarea": "string"
}

DELETE /orden-trabajo/
Descripción: Elimina una orden de trabajo específica por ID.
Controlador: deleteOrdenTrabajoById

PUT /orden-trabajo/
Descripción: Actualiza una orden de trabajo específica por ID.
Controlador: updateOrdenTrabajoById
Cuerpo de la solicitud:

{
  "operario": "string",
  "nombre": "string",
  "fecha": "string",
  "sector": "string",
  "edificio": "number",
  "activo": "string",
  "ubicacion": "string",
  "piso": "number",
  "tipoActivo": "string",
  "solicitante": "string",
  "instrucciones": "string",
  "activo_tarea": "string"
}

10. Rutas de Número de Tipo (/numero-tipo)
GET /numero-tipo
Descripción: Obtiene todos los números de tipo.
Controlador: NumeroTipo
Respuesta: Array de números de tipo.

POST /numero-tipo
Descripción: Crea un nuevo número de tipo.
Controlador: createNumeroTipo
Cuerpo de la solicitud:

{
  "numero": "string",
  "tipo": "string"
}

DELETE /numero-tipo/
Descripción: Elimina un número de tipo específico por ID.
Controlador: deleteNumeroTipoById

PUT /numero-tipo/
Descripción: Actualiza un número de tipo específico por ID.
Controlador: updateNumeroTipoById
Cuerpo de la solicitud:

{
  "numero": "string",
  "tipo": "string"
}
11. Rutas de Operario (/operario)
GET /operarios
Descripción: Obtiene la lista de operarios.
Controlador: getOperarios
Respuesta: Array de operarios.

POST /operario
Descripción: Crea un nuevo operario.
Controlador: createOperario
Cuerpo de la solicitud:

{
  "nombre": "string",
  "apellido": "string",
  "email": "string",
  "telefono": "string"
}

DELETE /operario/
Descripción: Elimina un operario específico por ID.
Controlador: deleteOperarioById

PUT /operario/
Descripción: Actualiza un operario específico por ID.
Controlador: updateOperarioById
Cuerpo de la solicitud:

{
  "nombre": "string",
  "apellido": "string",
  "email": "string",
  "telefono": "string"
}
