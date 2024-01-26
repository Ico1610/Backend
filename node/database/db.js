import { Sequelize } from "sequelize";

const db = new Sequelize('curriculum', 'root', '',{
host: 'localhost',
dialect: 'mysql'

})

export default db