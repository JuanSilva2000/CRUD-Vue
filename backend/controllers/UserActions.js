import User from "../model/User.js";

class UserActions {
    static async createUser(nombre, email, edad = undefined) {
        try {
            await User.create({
                nombre,
                email,
                edad
            });
        } catch (error) {
            throw error;
        }
    }

    static async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            return user ? user.toJSON() : null;
        }
        catch (error) {
            throw error;
        }
    }

    static async updateUserById(id, {nombre, email, edad}) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return null;
            }

            if (nombre) user.nombre = nombre;
            if (email) user.email = email;
            if (edad !== undefined) user.edad = edad;

            await user.save();
            return user.toJSON();
        } catch (error) {
            throw error;
        }
    }

    static async deleteUserById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) return null;
            await user.destroy();
            return user.toJSON();
        } catch (error) {
            throw error;
        }
    }

    static async getAllUsers() {
        try {
            const users = await User.findAll();
            return users.map(user => user.toJSON());
        } catch (error) {
            throw error;
        }
    }
}

export default UserActions;