import pool from '../db.js'; 

export const Edificios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Edificio');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener edificios' });
  }
};

export const EdificioId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Edificio WHERE id_edificio = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Edificio no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el edificio' });
  }
};

export const createEdificio = async (req, res) => {
  const { nombre, direccion, label_tag } = req.body; 
  try {
    const [result] = await pool.query(
      'INSERT INTO Edificio (nombre, direccion, label_tag) VALUES (?, ?, ?)',
      [nombre, direccion, label_tag]
    );
    res.status(201).json({ message: 'Edificio creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el edificio' });
  }
};

export const updateEdificioById = async (req, res) => {
  const { id } = req.params;
  const { nombre, direccion, label_tag } = req.body; 
  try {
    const [result] = await pool.query(
      'UPDATE Edificio SET nombre = ?, direccion = ?, label_tag = ? WHERE id = ?',
      [nombre, direccion, label_tag, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Edificio no encontrado' });
    }
    res.json({ message: 'Edificio actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el edificio' });
  }
};


export const deleteEdificioById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Edificio WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Edificio no encontrado' });
    }
    res.json({ message: 'Edificio eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el edificio' });
  }
};






