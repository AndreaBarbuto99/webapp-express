const connection = require("./../data/db");



function index(req, res) {

    connection.query("SELECT * FROM movies", (err, results) => {
        if (err) return res.json({ error: err.message });
        res.json(results);
    });
}


function show(req, res) {

    const id = parseInt(req.params.id)

    const showSql = "SELECT * FROM movies WHERE id = ?"

    connection.query(showSql, [id], (err, results) => {
        if (err) return res.json({ error: err.message });
        res.json(results)
    });

}



module.exports = { show, index }