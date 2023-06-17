import { Router } from 'express';
import mainController from '../controllers/main';
import deptController from '../controllers/departamento';

const router = Router();

// Main controller
router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/ui', mainController.ui);

// Departamento controller
router.get('/dept', deptController.index);
router.get('/dept/create', deptController.create);
router.post('/dept/create', deptController.create);
router.get('/dept/update/:id', deptController.update);
router.post('/dept/update/:id', deptController.update);
router.get('/dept/:id', deptController.read);
router.post('/dept/:id', deptController.del);

export default router;
