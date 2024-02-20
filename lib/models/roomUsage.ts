import { DataTypes, Model } from "sequelize";
import { postgre } from "../db";

class RoomUsage extends Model {
    declare id: number;
    declare client_id: number;
    declare room_id: number;
    declare start_time: Date;
    declare end_time: Date;
    declare booking_date: Date;
    declare quota_used: number;
    declare created_at: Date;
}

RoomUsage.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    booking_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quota_used: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: postgre,
    modelName: 'room_usage'
});
