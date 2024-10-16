import express from 'express';
import {SectorId, Sectores, deleteSectorById, createSector, updateSectorById} from '../controllers/sectorController.js'; 

const router = express.Router();

router.get('/sectores', Sectores); 
router.get('/sector', SectorId);
router.delete('/sector', deleteSectorById);
router.post('/sector', createSector);
router.put('/sector', updateSectorById);

export default router; 
