const express = require('express');
const ejs = require("ejs");
const app = express();

app.get("/", (req, res) => {res.render("index");});
app.get("/about", (req, res)=> {
	return res.render("about")
})
app.get("/contact", (req, res)=> {
	return res.render("contact")
})
app.get("/search", (req, res)=> {
	return res.render("search")
})
app.listen(3000, () => {console.log("Server started!");});
app.engine("html", ejs.renderFile);
app.set('view engine', "html");
app.set('views', __dirname + '/public');
app.use(
	require("express").static(__dirname + "/public")
);