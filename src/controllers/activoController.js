import pool from '../db.js';

export const Activos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Activo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener activos' });
  }
};

export const ActivoId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Activo WHERE id_activo = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Activo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el activo' });
  }
};
