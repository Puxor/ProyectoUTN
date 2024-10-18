import express from 'express';
import { ensureToken, verifyToken } from './middleware/tokenMiddleware.js';
import cookieParser from 'cookie-parser';
import edificioRoutes from './routes/edificioRoutes.js'; 
import pisoRoutes from './routes/pisoRoutes.js';
import sectorRoutes from './routes/sectorRoutes.js';
import ubicacionActivoRoutes from './routes/ubicacionActivoRoutes.js';
import operarioRoutes from './routes/operarioRoutes.js';
import administrativoRoutes from './routes/administrativoRoutes.js';
import tareaRoutes from './routes/tareaRoutes.js';
import activoRoutes from './routes/activoRoutes.js';
import activoTareaRoutes from './routes/activoTareaRoutes.js';
import ordenTrabajoRoutes from './routes/ordenTrabajoRoutes.js';


const app = express();
app.use (express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());


app.use('/api', edificioRoutes);
app.use('/api', pisoRoutes);
app.use('/api', sectorRoutes);
app.use('/api', ubicacionActivoRoutes);
app.use('/api', operarioRoutes);
app.use('/api', administrativoRoutes);
app.use('/api', tareaRoutes);
app.use('/api', activoRoutes);
app.use('/api', activoTareaRoutes);
app.use('/api', ordenTrabajoRoutes);
app.get('/api/protected', ensureToken, verifyToken);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    });
});


export default app;
