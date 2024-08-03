const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/routes");

const cors = require("cors");

const app = express();

const PORT =process.env.PORT || 5001
// Middleware
app.use(express.json()); //manasa9999
app.use(cors());


mongoose.connect("mongodb+srv://manasa:z2r6uqyTscjsFS20@cluster0.dusc1yl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`server is running...`)); 