// tempat koneksi dengan database
import { Sequelize } from "sequelize";

const db = new Sequelize("nama_database", "username", "password", {
  host: "misaal_localhost",
  dialect: "databse yang dipakai",
});

export default db;
