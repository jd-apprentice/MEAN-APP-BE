import pkg from 'mongoose';
const { Schema, model } = pkg;

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

export default model("User", userScheema);