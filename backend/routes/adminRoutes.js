import express from 'express';
import {
   getUserMessage, 
    getOneMessage, 
    markMessageAsRead, 
    deleteUserMessage, 
    authAdmin, 
    registerAdmin, 
    uploadProject,
    getProjects,
    editProject,
    deleteProject,
    logoutAdmin
} from '../controller/adminController.js';
import { protectAdmin } from '../middleware/adminAuthMiddleware.js';

const router = express.Router();

router.get('/messages', protectAdmin, getUserMessage);
router.get('/messages/:id', protectAdmin, getOneMessage);
router.put('/messages/:id/read', protectAdmin, markMessageAsRead);
router.delete('/messages/:id', protectAdmin, deleteUserMessage);
router.post('/login', authAdmin);
router.post('/register', registerAdmin);
router.post('/upload', protectAdmin, uploadProject)
router.get('/project', protectAdmin, getProjects)
router.put('/project/:id', protectAdmin, editProject)
router.delete('/project/:id', protectAdmin, deleteProject)
router.post('/logout', logoutAdmin);

export default router