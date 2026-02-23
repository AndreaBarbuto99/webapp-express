const express = require("express");
const app = express();
const port = process.env.PORT;


const router = require("./routers/router")


app.get("/", (req, res) => {
    app.send("<h1>ciao a tutti</h1>")
});

app.use("/movies", router)
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})