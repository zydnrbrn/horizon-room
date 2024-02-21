import { DataTypes, Model } from "sequelize";
import psql from "../config/db";

export class Clients extends Model {
    declare id: string;
    declare name: string;
    declare email: string;
    declare phone: string;
    declare credit: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Clients.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
}, {
    sequelize: psql,
    modelName: 'clients'
})