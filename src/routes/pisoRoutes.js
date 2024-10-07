import express from 'express';
import * as pisoController from '../controllers/pisoController.js'; 

const router = express.Router();

router.get('/', pisoController.getPisos); 
router.get('/:id', pisoController.getPisoById);

export default router; 
