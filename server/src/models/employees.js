const { Schema, model } = require("mongoose");

const employeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    position: {type: String, required: true},
    salary: {type: Number, required: true},
    experience: [
        {
            company: {type: String, required: false},
            position: {type: String, required: false},
            startDate: {type: Date, required: false},
            endDate: {type: Date, required: false},
            description: {type: String, required: false}
        },
    ],
    education: [
        {
            school: {type: String, required: false},
            degree: {type: String, required: false},
            fieldOfStudy: {type: String, required: false},
            startDate: {type: Date, required: false},
            endDate: {type: Date, required: false},
            description: {type: String, required: false}
        },
    ]
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = model("Employee", employeeSchema);