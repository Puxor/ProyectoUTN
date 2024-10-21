import pool from '../db.js';


export const getOrdenesTrabajo = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM orden_trabajo');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo' });
  }
};


export const getOrdenTrabajoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE idorden_trabajo = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la orden de trabajo' });
  }
};


export const createOrdenTrabajo = async (req, res) => {
  const {
    id_operario,
    id_sector,
    id_edificio,
    id_activo_tarea,
    id_ubicacion_activo,
    id_piso,
    id_administrativo,
    id_numero_tipo,
    identificador_completo,
  } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO orden_trabajo 
      (id_operario, id_sector, id_edificio, id_activo_tarea, 
       id_ubicacion_activo, id_piso, id_administrativo, id_numero_tipo, identificador_completo) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id_operario, id_sector, id_edificio, id_activo_tarea, 
        id_ubicacion_activo, id_piso, id_administrativo, id_numero_tipo, 
        identificador_completo,
      ]
    );

    res.status(201).json({
      message: 'Orden de trabajo creada',
      id: result.insertId,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la orden de trabajo' });
  }
};

// Actualizar una orden de trabajo
export const updateOrdenTrabajo = async (req, res) => {
  const { id } = req.params;
  const {
    id_operario,
    id_sector,
    id_edificio,
    id_activo_tarea,
    id_ubicacion_activo,
    id_piso,
    id_administrativo,
    id_numero_tipo,
    identificador_completo,
  } = req.body;

  try {
    const [result] = await pool.query(
      `UPDATE orden_trabajo SET 
        id_operario = ?, id_sector = ?, id_edificio = ?, 
        id_activo_tarea = ?, id_ubicacion_activo = ?, 
        id_piso = ?, id_administrativo = ?, id_numero_tipo = ?, 
        identificador_completo = ?
      WHERE idorden_trabajo = ?`,
      [
        id_operario, id_sector, id_edificio, id_activo_tarea, 
        id_ubicacion_activo, id_piso, id_administrativo, 
        id_numero_tipo, identificador_completo, id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json({ message: 'Orden de trabajo actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la orden de trabajo' });
  }
};


export const deleteOrdenTrabajo = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM orden_trabajo WHERE idorden_trabajo = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Orden de trabajo no encontrada' });
    }

    res.json({ message: 'Orden de trabajo eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la orden de trabajo' });
  }
};



export const getOrdenesTrabajoDetalladas = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        ot.idorden_trabajo AS orden_trabajo_id, 
        at.idactivo_tarea AS activo_tarea_id,
        a.tipo AS activo_tipo,
        a.tag_diminutivo AS activo_tag,
        t.tarea AS tarea_descripcion,
        e.nombre AS edificio_nombre,
        p.piso AS piso_nombre,
        u.nombre AS nombre_usuario,
        s.sector AS sector_nombre,
        ua.ubicacion AS ubicacion_nombre,
        nt.numero_tipo AS numero_tipo
      FROM 
        orden_trabajo ot
      JOIN 
        activo_tarea at ON ot.id_activo_tarea = at.idactivo_tarea
      JOIN 
        activo a ON at.id_activo = a.id_activo
      JOIN 
        tarea t ON at.id_tarea = t.id_tarea
      JOIN 
        edificio e ON ot.id_edificio = e.id_edificio
      JOIN 
        piso p ON ot.id_piso = p.id_piso
      JOIN
        usuario u ON ot.id_usuario = u.id_usuario
      JOIN 
        sector s ON ot.id_sector = s.id_sector
      JOIN 
        ubicacion_activo ua ON ot.id_ubicacion_activo = ua.idubicacion_activo
      JOIN 
        numero_tipo nt ON ot.id_numero_tipo = nt.id_numero_tipo;
    `);

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las órdenes de trabajo detalladas' });
  }
};