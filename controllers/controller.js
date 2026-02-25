const connection = require("./../data/db");



function index(req, res) {

    connection.query("SELECT * FROM movies", (err, results) => {
        if (err) return res.json({ error: err.message });

        const movies = results.map(movie => {
            return {
                ...movie,
                image: req.imagePath + movie.image
            }
        }

        )

        res.json(movies);
    });
}


function show(req, res) {

    const id = parseInt(req.params.id)

    const showSqlReviews = "SELECT * FROM reviews WHERE movie_id = ?"

    const showSql = "SELECT * FROM movies WHERE id = ?"


    connection.query(showSql, [id], (err, results) => {

        if (err) return res.json({ error: err.message });
        if (results.length === 0) return res.json({ error: "Movie non trovato" });

        const movie = results[0];
        movie.image = req.imagePath + movie.image;

        connection.query(showSqlReviews, [id], (err, resultsReviews) => {
            if (err) return res.json({ error: err.message });
            if (resultsReviews.length === 0) return res.json({ error: "Review non trovato" });
            movie.reviews = resultsReviews;
            res.json(movie);
        });
    });
}
module.exports = { show, index };