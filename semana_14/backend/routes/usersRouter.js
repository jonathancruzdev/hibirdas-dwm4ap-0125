import express from "express";
import multer from "multer";
import { uploadController } from "../controllers/uploadController.js";
import {getUsers, getUserById, addUser, updateUser, deleteUser, auth} from "../controllers/userController.js" 

import { validacionToken } from "../middlewares/auth.js";

const router = express.Router();

// Lo podemos dejar en otro archivo
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
  })

const upload = multer({ storage: storage });

// Rutas para los usuarios
router.get('/', getUsers );
router.get('/:id', getUserById );
router.post('/', addUser );
router.post('/auth', auth );
router.delete('/:id', validacionToken, deleteUser );
router.put('/:id', upload.single('file'), updateUser);

router.post('/upload', upload.single('file'), uploadController );

export default router;