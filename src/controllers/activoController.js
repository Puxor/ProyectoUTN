import pool from '../db.js';

export const Activos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Activo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener activos' });
  }
};

export const ActivoId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Activo WHERE id_activo = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Activo no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el activo' });
  }
};

export const createActivo = async (req, res) => {
  const { nombre, descripcion, sector_id } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Activo (tipo, tag_diminutivo, label_tag) VALUES (?, ?, ?)',
      [tipo, tag_diminutivo, label_tag]
    );
    res.status(201).json({ message: 'Activo creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el activo' });
  }
};

export const updateActivoById = async (req, res) => {
  const { id } = req.params;
  const { tipo, tag_diminutivo, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Activo SET tipo = ?, tag_diminutivo = ?, label_tag = ? WHERE id_activo = ?',
      [tipo, tag_diminutivo, label_tag, id_activo]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Activo no encontrado' });
    }
    res.json({ message: 'Activo actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el activo' });
  }
};

export const deleteActivoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Activo WHERE id_activo = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Activo no encontrado' });
    }
    res.json({ message: 'Activo eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el activo' });
  }
};
