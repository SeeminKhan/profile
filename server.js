const express = require("express");
const app = express();
const PORT = 3000;

// Set static folder
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Projects Page Route
app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
