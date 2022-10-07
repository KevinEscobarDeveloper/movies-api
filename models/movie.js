var mongoose = require ('mongoose')


var movieSchema = mongoose.Schema(
    {
        title: String,
        year: {type: Date, default: Date.now},
        duration: {type: Number},
        gender: [],
        director: String,
        plot: String,
        country: String,
        imdbRaiting: {type: Number, min:0, max: 10}
    }
);

module.exports = mongoose.model('Movie', movieSchema);