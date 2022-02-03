const express = require("express");
const morgan = require("morgan");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.set("port", process.env.PORT || 5000);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.listen(process.env.PORT);
app.use("/api/employees", require("./routes/employess.routes"));
app.use("/api/users", require("./routes/user.routes"));

module.exports = app;
