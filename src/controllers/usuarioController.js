import pool from '../db.js';
import bcryptjs from 'bcryptjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../config.js';

export const Usuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM Usuario');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
}

export const CrearUsuario = async (req, res) => {
    const {nombre, area, email, contraseña, apellido} = req.body;
    if (!nombre || !area || !email || !contraseña || !apellido) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
      }
      try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const [result] = await pool.query('INSERT INTO Usuario (nombre, area, email, contraseña, apellido) VALUES (?,?,?,?,?)',
       [nombre, area, email, hashedPassword, apellido]);

    res.json({ nombre, area, email, hashedPassword });
  } catch (err) {
    console.error('Error al registrar usuario: ' + err);
    res.json({ error: 'Error al registrar usuario' });
  };
}

export const UsuarioLogin = async (req, res) => {
  const { nombre, contraseña } = req.body;

  if (!nombre || !contraseña) {
    return res.json({ error: 'Nombre y contraseña son requeridos' });
  }

  try {
    const [results] = await pool.query('SELECT * FROM usuario WHERE nombre = ?', [nombre]);
    console.log('Resultados de la consulta:', results);
    if (results.length === 0 || !(await bcrypt.compare(contraseña, results[0].contraseña))) {
      return res.status(401).json({ error: 'Usuario y/o contraseña no encontrado' });
    }

    
    const user = results[0];

   

    const token = jwt.sign({ id: user.id_usuario, nombre: user.nombre }, SECRET_KEY, { expiresIn: '2h' });
   
    res.cookie('token', token, {
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 7200000 
    });
    res.json({ message: 'Inicio de sesión exitoso' });
  } catch (err) {
    console.error('Error al iniciar sesión: ' + err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

