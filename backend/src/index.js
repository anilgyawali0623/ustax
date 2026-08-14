import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import contactEmailRoute from "../route/contactEmail.route.js";
const app = express();
const port = 3000;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://ustax-two.vercel.app"],
    credentials: true,
  }),
);

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", contactEmailRoute);
app.use("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});
