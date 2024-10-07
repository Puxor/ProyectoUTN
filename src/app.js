import express from 'express';
import edificioRoutes from './routes/edificioRoutes.js'; 
import pisoRoutes from './routes/pisoRoutes.js';
import sectorRoutes from './routes/sectorRoutes.js';
import ubicacionActivoRoutes from './routes/ubicacionActivoRoutes.js';
import operarioRoutes from './routes/operarioRoutes.js';
import administrativoRoutes from './routes/administrativoRoutes.js';


const app = express();

app.use(express.json());

app.use('/api/edificio', edificioRoutes);
app.use('/api/piso', pisoRoutes);
app.use('/api/sector', sectorRoutes);
app.use('/api/ubicacion-activo', ubicacionActivoRoutes);
app.use('/api/operario', operarioRoutes);
app.use('/api/administrativo', administrativoRoutes);


app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint no encontrado'
    });
});


export default app;
