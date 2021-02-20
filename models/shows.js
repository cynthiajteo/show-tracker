const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showSchema = Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        category: { type: String, required: true },
        episode: { type: String, required: true },
        completed: { type: Boolean, default: false },
        reviews: { type: string },
    },
    { timestamps: true },
);

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
