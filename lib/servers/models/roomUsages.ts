import { DataTypes, Model } from "sequelize";
import psql from "../config/db";

export class RoomUsages extends Model {
    declare id: string;
    declare clientId: string;
    declare roomId: string;
    declare startTime: Date;
    declare endTime: Date;
    declare bookingDate: Date;
    declare quotaUsed: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

RoomUsages.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    clientId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roomId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quotaUsed: {
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
    modelName: 'roomUsages'
})