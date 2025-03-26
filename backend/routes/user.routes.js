import express from 'express';
import UserActions from '../controllers/UserActions.js';
import { userSchema, userUpdateSchema, idSchema } from '../middlewares/userValidation.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    try {
        const users = await UserActions.getAllUsers();

        if (!users) {
            return res.status(404).json({ message: "No se encontraron usuarios" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Hubo un problema obteniendo los usuarios" });
    }
});

// Obtener un usuario por su ID
router.get('/usuarios/:id', async (req, res) => {
    const result = idSchema.safeParse(req.params);

    if (!result.success) {
        return res.status(400).json({ message: "ID inválido", errors: result.error.format() });
    }

    try {
        const user = await UserActions.getUserById(Number(req.params.id));

        if (!user) {
            return res.status(404).json({ message: "No se encontró el usuario" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error al encontrar el usuario" });
    }
});

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ message: "Datos inválidos", errors: result.error.format() });
    }

    try {
        await UserActions.createUser(req.body.nombre, req.body.email, req.body.edad);
        res.status(201).json({ message: "Usuario creado" });
    } catch (error) {
        res.status(500).json({ message: "Error al crear usuario" });
    }
});

// Actualizar los datos de un usuario
router.put('/usuarios/:id', async (req, res) => {
    const idResult = idSchema.safeParse(req.params);
    if (!idResult.success) {
        return res.status(400).json({ message: "ID inválido", errors: idResult.error.format() });
    }

    const result = userUpdateSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: "Datos inválidos", errors: result.error.format() });
    }

    try {
        const userStatus = await UserActions.updateUserById(Number(req.params.id), req.body);

        if (!userStatus) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario actualizado" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario" });
    }
});

// Eliminar un usuario
router.delete('/usuarios/:id', async (req, res) => {
    const result = idSchema.safeParse(req.params);

    if (!result.success) {
        return res.status(400).json({ message: "ID inválido", errors: result.error.format() });
    }

    try {
        const deleteUser = await UserActions.deleteUserById(Number(req.params.id));

        if (!deleteUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.status(200).json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: "No se pudo eliminar el usuario" });
    }
});

export default router;
