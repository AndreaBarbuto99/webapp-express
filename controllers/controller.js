const connection = require("./../data/db");



function index(req, res) {

    connection.query("SELECT * FROM movies", (err, results) => {
        if (err) return res.json({ error: err.message });
        res.json(results);
    });
}


function show(req, res) {

    const id = parseInt(req.params.id)

    const showSqlReviews = "SELECT reviews.vote FROM reviews WHERE movie_id = ?"

    const showSql = "SELECT * FROM movies WHERE id = ?"


    connection.query(showSql, [id], (err, results) => {

        if (err) return res.json({ error: err.message });
        if (results.length === 0) return res.json({ error: "Movie non trovato" });

        const movie = results[0];

        connection.query(showSqlReviews, [id], (err, resultsReviews) => {
            if (err) return res.json({ error: err.message });
            movie.reviews = resultsReviews;
            res.json(movie);
        });
    });
}
module.exports = { show, index };