// Dependencies
const express = require("express");
const fs = require("fs");


// Create an Express Server
const app = express();

// Create a port
const PORT = process.env.PORT || 8080

// Set the Express app up to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log("App listening on PORT " + PORT));
