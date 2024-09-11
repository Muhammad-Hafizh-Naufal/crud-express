import express from "express";
import cors from "cors";
import Route from "./Source/Routes.js";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// route
app.use(Route);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
