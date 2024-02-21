import { CreationOptional, DataTypes, Model } from "sequelize";
import psql from "../config/db";

export class Users extends Model {
    declare id: string;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare phone: string;
    declare credits: number;
}

Users.init({
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    phone: {
        type: DataTypes.STRING,
    },
    credits: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: psql,
    modelName: 'users'
})