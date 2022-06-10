import  { Sequelize } from 'sequelize';
import "dotenv/config";

const sequelize: Sequelize = new Sequelize(process.env.DATABASE!, process.env.DB_USERNAME!, process.env.DB_PWD!, {
    host: process.env.SERVER!,
    dialect: "mssql"
});

export { sequelize };