import pkg from 'mongoose';
const { Schema, model } = pkg;

const userScheema = new Schema(
    {   
        username: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true, default: "User", enum: ["User", "Admin"] },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("User", userScheema);