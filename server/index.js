const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use("/users", userRoutes);
app.use("/auth", authRoutes);
// app.use('/events', eventRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// const authRoutes = require('./controllers/authentication'); // Adjust the path as needed
// app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.authenticate();
  console.log("Database connected!");
});
