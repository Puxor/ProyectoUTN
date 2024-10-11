import pool from '../db.js';

export const ActivoTareas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Activo_Tarea');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la relación Activo-Tarea' });
  }
};

export const ActivoTareaId = async (req, res) => {
  const { id_activo, id_tarea } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Activo_Tarea WHERE id_activo = ? AND id_tarea = ?', [id_activo, id_tarea]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Relación Activo-Tarea no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la relación Activo-Tarea' });
  }
};
