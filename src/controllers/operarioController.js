import pool from '../db.js';

export const Operarios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Operario');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener operarios' });
  }
};

export const OperarioId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Operario WHERE id_operario = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Operario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el operario' });
  }
};


export const createOperario = async (req, res) => {
  const { nombre, area, email, contraseña} = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Operario (nombre, area, email,contraseña) VALUES (?, ?, ?, ?)',
      [nombre, area , email, contraseña ]
    );
    res.status(201).json({ message: 'Operario creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el operario' });
  }
};

export const updateOperarioById = async (req, res) => {
  const { id } = req.params;
  const { nombre, area, email, contraseña } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Operario SET nombre = ?, area = ?, email = ?, contraseña = ? WHERE id = ?',
      [nombre, area, email, contraseña, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Operario no encontrado' });
    }
    res.json({ message: 'Operario actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el operario' });
  }
};

export const deleteOperarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Operario WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Operario no encontrado' });
    }
    res.json({ message: 'Operario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el operario' });
  }
};
