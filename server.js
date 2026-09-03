const express = require("express");

const app = express();

app.get("/","0.0.0.0", (req, res) => {
    res.send("Hello World! My Name is yash");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});