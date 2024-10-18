import pool from '../db.js';


export const Tareas = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Tarea');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
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


export const createTarea = async (req, res) => {
  const { descripcion, operario_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Tarea (descripcion, operario_id) VALUES (?, ?)',
      [descripcion, operario_id]
    );
    res.status(201).json({ message: 'Tarea creada', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

export const updateTareaById = async (req, res) => {
  const { id } = req.params;
  const { descripcion, operario_id } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Tarea SET descripcion = ?, operario_id = ? WHERE id = ?',
      [descripcion, operario_id, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

export const deleteTareaById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Tarea WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};