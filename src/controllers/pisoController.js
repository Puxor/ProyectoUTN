import pool from '../db.js'; 

export const getPisos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Piso');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener pisos' });
  }
};

export const getPisoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Piso WHERE id_piso = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Piso no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el piso' });
  }
};
