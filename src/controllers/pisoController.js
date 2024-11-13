import pool from '../db.js'; 

export const Pisos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Piso');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener pisos' });
  }
};

export const PisoId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Piso WHERE id_piso = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Piso no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el piso' });
  }
};

export const createPiso = async (req, res) => {
  const { piso, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Piso (piso, label_tag) VALUES (?, ?)',
      [piso, label_tag]
    );
    res.status(201).json({ message: 'Piso creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el piso' });
  }
};

export const updatePisoById = async (req, res) => {
  const { id } = req.params;
  const { piso, label_tag} = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Piso SET piso = ?, label_tag = ? WHERE id = ?',
      [piso,label_tag, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Piso no encontrado' });
    }
    res.json({ message: 'Piso actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el piso' });
  }
};

export const deletePisoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Piso WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Piso no encontrado' });
    }
    res.json({ message: 'Piso eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el piso' });
  }
};
