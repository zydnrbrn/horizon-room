import { Sequelize } from "sequelize";

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/db_horizon';
const psql = new Sequelize(dbUrl, {
    dialect: 'postgres',
    dialectModule: require('pg')
});

export default psql;