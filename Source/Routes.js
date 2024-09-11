import express from "express";
import {
  getAllUsers,
  getUserByNpm,
  createUser,
  updateUser,
  deleteUser,
} from "./Controller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:Npm", getUserByNpm);
router.post("/users", createUser);
router.patch("/users/:Npm", updateUser);
router.delete("/users/:Npm", deleteUser);

export default router;
