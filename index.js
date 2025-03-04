'use-strict';
const express = require('express');
const port = 3000;
const host = '0.0.0.0';
const path = require('path');
const app = express();
app.use("/public", express.static(path.resolve(__dirname, "public")));
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public", "index.html")); //any route or path, we go back to the root and fetch the files to output to html
});
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
});