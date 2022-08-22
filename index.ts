import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import {
  PostgreSQLConnectionNesa,
  PostgreSQLConnectionQuality,
} from "./connection";

const dotenv = require("dotenv");
const result = dotenv.config({ path: process.cwd() + "\\.env" });
if (result.error) {
  console.log(result.error);
}

const sha1 = require("sha1");

var jsonParser = bodyParser.json();
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

const listApiPostgres = [
  {
    path: "/v-ticket-type-chart",
    table: "ticket-type-chart",
    schema: "ticketing",
    connection: PostgreSQLConnectionNesa,
  },
];

app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  if (req.url === "/" || req.url === "/login") return next();

  next();
});

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
