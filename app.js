const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Define Routes
app.use("/api/auth", require("./routers/userRouter"));
app.use("/api/customers", require("./routers/customerRouter"));
app.use("/api/destinations", require("./routers/destinations"));

app.listen(port, () => console.log(`Server started on port ${port}`));
