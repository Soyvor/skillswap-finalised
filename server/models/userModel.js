const mongoose = require("mongoose");
const UserSchema = {
    name: {
        type: 'string',
        required: true,
        trim: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: 'string',
        required: true,
        trim: true
    },
    phoneNumber: {
        type: 'number',  // Changed to number
        required: true,
        trim: true
    },
    skills: {
        type: 'array',
        required: true,
        trim: true
    },
    photos: {
        type: 'array',
        validate: {
            validator: function (value) {
                return value.length <= 3;
            },
            message: 'Photos should not exceed 3'
        }
    },
    videos: {
        type: 'array',
        validate: {
            validator: function (value) {
                return value.length <= 2;
            },
            message: 'Videos should not exceed 2',
        },
    },
    birthdate: {
        type: 'date',
        required: true
    },
    age: {
        type: 'number',
        default: 0
    },
    gender: {
        type: 'string',
        enum: ['Male', 'Female', 'Other']
    },
    description: {
        type: 'string',
        maxlength: 240
    }
};

module.exports = mongoose.model("User", UserSchema);
