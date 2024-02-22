import { Sequelize } from "sequelize";

const psql = new Sequelize('postgres://postgres:postgres@localhost:5432/db_horizon', {
    dialect: 'postgres',
    dialectModule: require('pg')
});

export default psql;