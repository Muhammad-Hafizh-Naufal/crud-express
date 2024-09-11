import { Sequelize } from "sequelize";
import db from "./Database.js";

const User = db.define(
  "User",
  {
    Npm: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    UserName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
