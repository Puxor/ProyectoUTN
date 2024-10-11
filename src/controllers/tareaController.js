import pool from '../db.js';

export const Tareas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tarea');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas' });
  }
};

export const TareaId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Tarea WHERE id_tarea = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Tarea no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la tarea' });
  }
};
