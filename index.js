import express from "express";
import connection from "./conncetion.js";
import dotenv from "dotenv";
import patientRouter from "./patient.router.js";
dotenv.config();
const app = express();
const whitelist = [];
app.use((req, res, next) => {
  console.log(req.header("origin"));
  /*  if (!whitelist.includes(req.header("origin"))) {
    return next(new Error("Blocked"));
  } */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Private-Network", true);
  return next();
});
const port = process.env.PORT;
app.use(express.json());
app.use("/patient", patientRouter);
app.use("*", (req, res) => {
  return res.json({ message: "Invalid URL" });
});
app.use((err, req, res, next) => {
  return res.json({ message: "Error", err: err.message, stack: err.stack });
});
await connection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
