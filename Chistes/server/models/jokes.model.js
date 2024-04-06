const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	_id:String,
	setup: {
		type: String,
		required: [true, "joke is required"],
		minlength: [10, "joke must be at leaste 10 characters long"]
	},
	punchline: {
		type: String,
		required: [true, "response is required"],
		minlength: [3, "response must be at leaste 10 characters long"]
	}
},{collection:'Broma',
versionKey: false //here
});

const Broma = mongoose.model("Broma", JokeSchema);

module.exports = Broma;