import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port: number = 3000;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server initialized on port ${port}`);
});
