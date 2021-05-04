const express = require("express");
const cors = require("cors");
const { uri, port } = require("../config");
require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/index.routes"));
app.listen(port, () => {
	console.log(port);
});
