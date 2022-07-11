import { Router } from 'express';
import clientRouter from './clientRouter/index.js';

const router = Router();

router.use(clientRouter);

export default router;
