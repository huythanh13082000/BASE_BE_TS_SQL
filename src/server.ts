import express from "express";
import { json, urlencoded } from "body-parser";
import connection from "./config/db";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});