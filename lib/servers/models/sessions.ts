import { DataTypes, Model } from "sequelize";
import psql from "../config/db";

export class Sessions extends Model {
    declare id: string;
    declare userId: string;
    declare token: string;
    declare startedAt: Date;
    declare expiredAt: Date;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Sessions.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    userId: {
        type: DataTypes.STRING,
    },
    token: {
        type: DataTypes.STRING,
    },
    startedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    expiredAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
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
    modelName: 'sessions'
})