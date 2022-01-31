const app = require("./server");
const dotenv = require("dotenv");
require("./database");
dotenv.config();

app.listen(app.get("port"));
