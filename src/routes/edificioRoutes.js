import express from 'express';
import {EdificioId, Edificios} from '../controllers/edificioController.js'; 

const router = express.Router();

router.get('/listo-ediicios', Edificios); 
router.get('/edificio', EdificioId);

export default router; 
