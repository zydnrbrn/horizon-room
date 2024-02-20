import { DataTypes, Model } from "sequelize";
import { postgre } from "../db";

class Rooms extends Model {
    declare id: number;
    declare room_name: string;
    declare cost_per_hour: number;
}

Rooms.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    room_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost_per_hour: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: postgre,
    modelName: 'rooms'
});