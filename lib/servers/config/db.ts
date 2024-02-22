import { Sequelize } from "sequelize";
const psqlHost = process.env.POSTGRES_HOST ?? 'localhost'
const psqlPort = 5432
const psqlUser = process.env.POSTGRES_USER ?? 'postgres'
const psqlPassword = process.env.POSTGRES_PASSWORD
const psqlDb = process.env.POSTGRES_DATABASE ?? 'postgres'

const psql = new Sequelize(psqlDb, psqlUser, psqlPassword, {
    host: psqlHost,
    port: psqlPort,
    dialect: 'postgres',
    dialectModule: require('pg')
});

export default psql;