import pool from '../db.js'; 

export const getSectores = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Sector');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener sectores' });
  }
};

export const getSectorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Sector WHERE id_sector = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Sector no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el sector' });
  }
};
