import pool from '../db.js';

export const Administrativos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Administrativo');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener administrativos' });
  }
};

export const AdministrativoId = async (req, res) => {
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

export const createAdministrativo = async (req, res) => {
  const { nombre, apellido, email } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Administrativo (nombre, apellido, email) VALUES (?, ?, ?)',
      [nombre, apellido, email]
    );
    res.status(201).json({ message: 'Administrativo creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el administrativo' });
  }
};

export const updateAdministrativoById = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Administrativo SET nombre = ?, apellido = ?, email = ? WHERE id = ?',
      [nombre, apellido, email, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Administrativo no encontrado' });
    }
    res.json({ message: 'Administrativo actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el administrativo' });
  }
};

export const deleteAdministrativoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Administrativo WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Administrativo no encontrado' });
    }
    res.json({ message: 'Administrativo eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el administrativo' });
  }
};
