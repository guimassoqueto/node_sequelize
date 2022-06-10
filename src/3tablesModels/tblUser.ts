/**
 * Keep this file in sync with the code in the "Usage of `sequelize.define`"
 * section in /docs/manual/other-topics/typescript.md
 *
 * Don't include this comment in the md file.
 */
 import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';

 import { sequelize } from '../1sequelizeConnector/connector';
 
 interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
   id: CreationOptional<number>;
   name: string;
 }
 
 const tblUser = sequelize.define<UserModel>('tblUser', {
   id: {
     primaryKey: true,
     type: DataTypes.INTEGER.UNSIGNED,
     allowNull: false,
     autoIncrement: true
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });

 export { tblUser, UserModel };
 