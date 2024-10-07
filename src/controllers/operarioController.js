import pool from '../db.js';

export const getOperarios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Operario');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener operarios' });
  }
};

export const getOperarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Operario WHERE id_operario = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Operario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el operario' });
  }
};
