import pool from '../db.js'; 

export const Sectores = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM Sector');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener sectores' });
  }
};

export const SectorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM Sector WHERE id_sector = ?', [id]);
    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ error: 'Sector no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el sector' });
  }
};

export const createSector = async (req, res) => {
  const { sector, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO Sector (sector, label_tag) VALUES (?, ?)',
      [sector, label_tag]
    );
    res.status(201).json({ message: 'Sector creado', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el sector' });
  }
};

export const updateSectorById = async (req, res) => {
  const { id } = req.params;
  const { sector, label_tag } = req.body;
  try {
    const [result] = await pool.query(
      'UPDATE Sector SET sector = ?, label_tag = ? WHERE id = ?',
      [sector, label_tag, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Sector no encontrado' });
    }
    res.json({ message: 'Sector actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el sector' });
  }
};

export const deleteSectorById = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM Sector WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Sector no encontrado' });
    }
    res.json({ message: 'Sector eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el sector' });
  }
};
