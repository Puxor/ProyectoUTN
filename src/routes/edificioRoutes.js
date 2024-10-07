import express from 'express';
import * as edificioController from '../controllers/edificioController.js'; /

const router = express.Router();

router.get('/', edificioController.getEdificios); 
router.get('/:id', edificioController.getEdificioById);

export default router; 
