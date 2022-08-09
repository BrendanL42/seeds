const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
require("mongoose-function")(mongoose);
require("dotenv").config();

//routes
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

// datebase
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DataBase Connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DataBase connection error: ${err.message}`);
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/", userRoutes);
app.use("/", authRoutes);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res
      .status(401)
      .json({ error: "Unauthorized, your not meant to be here.... go away!" });
  }
});

// listen on port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
