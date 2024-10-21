import express from 'express';
import {EdificioId, Edificios, deleteEdificioById, createEdificio, updateEdificioById} from '../controllers/edificioController.js'; 

const router = express.Router();

router.get('/lista-edificios', Edificios); 
router.get('/edificio', EdificioId);
router.delete('/edificio', deleteEdificioById);
router.post('/edificio', createEdificio);
router.put('/edificio', updateEdificioById);

export default router; 
