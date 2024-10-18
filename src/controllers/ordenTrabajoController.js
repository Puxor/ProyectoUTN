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
