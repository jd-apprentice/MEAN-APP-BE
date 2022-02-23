import pkg from 'mongoose';
const { Schema, model } = pkg;

const randomUserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        avatar: { type: String, required: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("RandomUser", randomUserSchema);