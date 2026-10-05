
import 'dotenv/config';
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  database: process.env.DBASE,
  password: process.env.PG_PASSWORD,
  port: parseInt(process.env.PG_PORT || "5432", 10), 
  define: {
    schema: process.env.PG_SCHEMA || "public",
  },
  dialect: 'postgres',
  logging: false
});

export const checkDBConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been estabilished successfully!!');
  } catch (error) {
    console.error('unable to connect to the database:', error);
  }
}

// Llamamos a la función para probar
checkDBConnection();