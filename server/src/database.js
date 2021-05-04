const { Schema, model, connect } = require("mongoose");
const { uri } = require("../config");

connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).catch((err) => {
	console.error(err);
});
