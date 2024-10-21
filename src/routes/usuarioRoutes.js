import {Router} from 'express';
import {Usuarios, CrearUsuario, UsuarioLogin } from '../controllers/usuarioController.js';

const router = Router();

router.get('/lista-usuarios', Usuarios);
router.post('/register', CrearUsuario);
router.post('/login', UsuarioLogin);




export default router;