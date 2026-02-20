const express = require("express");
const app = express();
const port = process.env.PORT;


app.use("/", (req, res) => {
    res.send("<h1>Homepage della pagina</h1>")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})