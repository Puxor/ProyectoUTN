import pool from '../db.js';


export const ActivoTareas = async (req, res) => {
try {
  const [rows] = await pool.query('SELECT * FROM Activo_Tarea');
  res.json(rows);
} catch (err) {
  res.status(500).json({ error: 'Error al obtener las relaciones Activo-Tarea' });
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

export const createActivoTarea = async (req, res) => {
  const { activo_id, tarea_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Activo_Tarea (activo_id, tarea_id) VALUES (?, ?)',
      [activo_id, tarea_id]
    );
    res.status(201).json({ message: 'Relación Activo-Tarea creada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la relación Activo-Tarea' });
  }
};

export const updateActivoTareaById = async (req, res) => {
  const { id } = req.params;
  const { activo_id, tarea_id } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Activo_Tarea SET activo_id = ?, tarea_id = ? WHERE id = ?',
      [activo_id, tarea_id, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Relación no encontrada' });
    }
    res.json({ message: 'Relación Activo-Tarea actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la relación Activo-Tarea' });
  }
};

export const deleteActivoTareaById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Activo_Tarea WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Relación no encontrada' });
    }
    res.json({ message: 'Relación Activo-Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la relación' });
  }
};
