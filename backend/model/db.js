import sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new sequelize(
    process.env.DB_NAME,     
    process.env.DB_USER,       
    process.env.DB_PASSWORD,   
    {
        host: process.env.DB_HOST,     
        dialect: process.env.DB_DIALECT 
    }
);

const connectionDB = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:');
    }
}

connectionDB();

export default db;