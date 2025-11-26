import express from "express";
import nodemon from "nodemon";
import morgan from "morgan";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    res.render("index.ejs");
})

app.get("/get-advice", async (req, res) => {
    const result = await axios.get("https://api.adviceslip.com/advice");
    try{
        console.log(result.data.slip.advice);
        res.render("index.ejs", {advice: result.data.slip.advice});
    } catch (error) {
        console.log("There's something wrong with the server.", error.message);
        res.status(500).send("Error");
}
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})