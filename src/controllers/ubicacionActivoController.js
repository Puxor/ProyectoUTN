import pool from '../db.js';

export const UbicacionesActivos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Ubicacion_Activo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener ubicaciones de activos' });
  }
};

export const UbicacionActivoId = async (req, res) => {
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


export const createUbicacionActivo = async (req, res) => {
  const { ubicacion, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Ubicacion_Activo (ubicacion, label_tag) VALUES (?, ?)',
      [activo_id, sector_id]
    );
    res.status(201).json({ message: 'Ubicación de activo creada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la ubicación de activo' });
  }
};

export const updateUbicacionActivoById = async (req, res) => {
  const { id } = req.params;
  const { ubicacion, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Ubicacion_Activo SET ubicacion = ?, label_tag = ? WHERE id = ?',
      [ubicacion, label_tag, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Ubicación no encontrada' });
    }
    res.json({ message: 'Ubicación de activo actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la ubicación de activo' });
  }
};

export const deleteUbicacionActivoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Ubicacion_Activo WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Ubicación no encontrada' });
    }
    res.json({ message: 'Ubicación de activo eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la ubicación de activo' });
  }
};

