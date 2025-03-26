import db from './db.js';

async function syncDatabase() {
  try {
    await db.sync(); 
    console.log("Database is synced");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

export default syncDatabase;
