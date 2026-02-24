const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT;
const myOrigin = process.env.ORIGIN;

const router = require("./routers/router")

app.use(cors({
    origin: myOrigin
}))

app.get("/", (req, res) => {
    app.send("<h1>Homepage del server express</h1>")
});

app.use(express.static("public"));
app.use("/movies", router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})