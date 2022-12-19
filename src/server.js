import express from "express";
import { PORT } from "./config.js";
import modules from "./modules/index.js";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express(); 
app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(modules);
app.use('/uploads', express.static(path.join(process.cwd(),'uploads')))

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`));