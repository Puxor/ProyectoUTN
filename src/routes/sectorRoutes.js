import express from 'express';
import * as sectorController from '../controllers/sectorController.js'; 

const router = express.Router();

router.get('/', sectorController.getSectores); 
router.get('/:id', sectorController.getSectorById);

export default router; 
