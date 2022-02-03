const { Schema, model } = require("mongoose");

const userScheema = new Schema(
    {   
        username: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("User", userScheema);