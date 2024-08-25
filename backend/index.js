const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Configure CORS
app.use(cors({
    origin: process.env.FRONTEND_URL, // Allow requests from this origin
    credentials: true // Allow cookies and other credentials
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

// Handle preflight requests
app.options('*', cors());

const PORT = process.env.PORT || 8080;

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
}).catch(err => {
    console.error('Failed to connect to DB:', err);
});
