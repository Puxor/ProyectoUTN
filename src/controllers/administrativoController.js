import pool from '../db.js';

export const getAdministrativos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Administrativo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener administrativos' });
  }
};

export const getAdministrativoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Administrativo WHERE id_administrativo = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Administrativo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el administrativo' });
  }
};
