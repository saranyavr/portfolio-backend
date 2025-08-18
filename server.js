import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { contactRouter} from "./routes/contact.js";
import {routerProj} from "./routes/routeProj.js";
import {routerExp} from "./routes/routeExp.js";
import path from "path";
import { fileURLToPath } from 'url';
 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRouter);
app.use("/api/projects", routerProj);
app.use("/api/experience", routerExp);
app.get("/api/resume", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'SaranyaRajmohan-FullStack-Developer-Resume.pdf'));
});



app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Portfolio API</h1>");
});

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
});


