import express from 'express';
import {SectorId, Sectores} from '../controllers/sectorController.js'; 

const router = express.Router();

router.get('/sectores', Sectores); 
router.get('/sector', SectorId);

export default router; 
