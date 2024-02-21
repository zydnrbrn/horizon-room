import { DataTypes, Model } from "sequelize";
import psql from "../config/db";

export class Rooms extends Model {
    declare id: string;
    declare roomName: string;
    declare costPerHour: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Rooms.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    roomName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    costPerHour: {
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
    modelName: 'rooms'
});