import pool from '../db.js'; 

export const Edificios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Edificio');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener edificios' });
  }
};

export const EdificioId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Edificio WHERE id_edificio = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Edificio no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el edificio' });
  }
};
