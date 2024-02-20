import { DataTypes, Model } from "sequelize";
import { postgre } from "../db";

class Client extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare phone: string;
    declare credit: number;
    declare created_at: Date;
    declare updated_at: Date;
}

Client.init({
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
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: postgre,
    modelName: 'clients'
});