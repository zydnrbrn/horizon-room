import { DataTypes, Model } from "sequelize";
import { postgre } from "../db";

class Users extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createdAt: Date;
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: postgre,
    modelName: 'users'
});