// DEPENDENCIES

const path = require("path");
const router = require("express").Router();

// ROUTES

// Get notes.html if the url is localhost:8080/notes
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Otherwise default to home
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;