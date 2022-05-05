import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan"
import routes from "./routes/routes"

dotenv.config();

const app = express();

//middlware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

// Database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    autoIndex: false
}, (err) => {
    if (err) throw err;
    console.log('MongoDB connection!');
})

// Routes
routes(app);

// Start server listen
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port', port);
});