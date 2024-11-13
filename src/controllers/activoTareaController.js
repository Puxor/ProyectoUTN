import pool from '../db.js';

export const ActivoTareas = async (req, res) => {
  const { id_activo } = req.params;  

  
  if (!id_activo) {
    return res.status(400).json({ error: 'El id del activo es requerido.' });
  }

  try {
    
    const query = `
    SELECT tarea.id_tarea, tarea.tarea
    FROM activo
    JOIN activo_tarea ON activo.id_activo = activo_tarea.id_activo
    JOIN tarea ON tarea.id_tarea = activo_tarea.id_tarea
    WHERE activo.id_activo = ?`;  

    
    const [rows] = await pool.query(query, [id_activo]);

    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'No se encontraron tareas para este activo.' });
    }

    
    res.json(rows);

  } catch (err) {
    console.error('Error al obtener las tareas del activo:', err);
    res.status(500).json({ error: 'Error al obtener las relaciones Activo-Tarea' });
  }
};


export const ActivoTareaId = async (req, res) => {
  const { id_activo, id_tarea } = req.params;

  try {
    
    const [rows] = await pool.query('SELECT * FROM activo_tarea WHERE id_activo = ? AND id_tarea = ?', [id_activo, id_tarea]);
    
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
  const { id_activo, id_tarea } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO activo_tarea (id_activo, id_tarea) VALUES (?, ?)',
      [id_activo, id_tarea]
    );
    res.status(201).json({ message: 'Relación Activo-Tarea creada', id: result.insertId });
  } catch (error) {
    console.error('Error al crear la relación Activo-Tarea:', error);
    res.status(500).json({ error: 'Error al crear la relación Activo-Tarea' });
  }
};

export const updateActivoTareaById = async (req, res) => {
  const { id } = req.params;
  const { id_activo, id_tarea } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Activo_Tarea SET id_activo = ?, id_tarea = ? WHERE id = ?',
      [id_activo, id_tarea, id]
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
