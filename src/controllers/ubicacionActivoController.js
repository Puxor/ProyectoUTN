import pool from '../db.js';

export const getUbicacionesActivos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Ubicacion_Activo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener ubicaciones de activos' });
  }
};

export const getUbicacionActivoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Ubicacion_Activo WHERE id_ubicacion_activo = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Ubicación de activo no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener la ubicación de activo' });
  }
};
