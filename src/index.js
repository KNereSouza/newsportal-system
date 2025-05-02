import express from "express";
import { configDotenv } from "dotenv";

import router from "./routes/routes.js";

configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
