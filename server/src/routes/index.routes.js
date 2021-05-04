const express = require("express");

const UserSchema = require("../models/User");
const router = express.Router();

router.post("", async (req, res) => {
	try {
		const { name, email } = req.body;
		console.log(req.body);
		if (name) {
			if (email) {
				new UserSchema({ name, email }).save();
				return res.send({ error: false });
			} else {
				throw new Error(
					JSON.stringify({
						error: true,
						body: "El email es obligatorio",
					})
				);
			}
		} else {
			throw new Error(
				JSON.stringify({
					error: true,
					body: "El nombre es obligatorio",
				})
			);
		}
	} catch (e) {
		return res.json(JSON.parse(e.message));
	}
});

module.exports = router;
