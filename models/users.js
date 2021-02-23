const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        shows: [
            {
                title: { type: String },
                url: { type: String },
                category: { type: String },
                season: { type: Number },
                episode: { type: Number },
                completed: { type: Boolean, default: false },
                reviews: { type: String },
            },
        ],
    },
    { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
