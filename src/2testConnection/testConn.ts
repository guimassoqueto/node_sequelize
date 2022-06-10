import { sequelize } from "../1sequelizeConnector/connector";

async function testConn() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return "OK"
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return "FAIL"
    }
}

export { testConn };