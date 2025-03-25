import cors from "cors";
import express from "express";
import router from "./routes";
import { welcome } from "./controller";

const app = express();

app.use(cors());

app.use(express.json());

// @ts-ignore
app.get("/", welcome);

app.use("/", router);

export default app;
