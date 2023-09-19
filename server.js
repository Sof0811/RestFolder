// Import the Express.js library and assign it to the variable 'express'.
const express = require('express');

// Create an instance of the Express application.
const app = express();

// Import the Node.js File System module and assign it to the variable 'fs'.
const fs = require('fs');

// Define the port number for the server.
const PORT = 9000;

// Set up a route to handle GET requests to the root path ("/").
app.get("/", (req, res) => {
    // Create a new Date object to get the current date and time.
    const date = new Date();

    // Generate a timestamp in a specific format and assign it to 'pathName'.
    const pathName = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}`;

    // Generate another timestamp in a different format and assign it to 'pathName2'.
    const pathName2 = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    // Write 'pathName2' to a text file in a specific folder.
    fs.writeFileSync(`./RestapiI Folder/${pathName}.txt`, pathName2);

    // Read the contents of the "RestapiI Folder" directory.
    fs.readdir("./RestapiI Folder", (err, filename) => {
        if (err) {
            // If there's an error, send an error message in the response.
            res.send('Files not getting!')
        } else {
            // If successful, send the 'pathName2' timestamp and a list of filenames in the response.
            res.send(`${pathName2}<br/><br/> Files List:<br/>${filename.join('<br/>')}<br/>`)
        }
    })
})

// Start the Express server and make it listen on the specified port.
app.listen(PORT, () => {
    // Log a message to indicate that the server is running.
    console.log("Server is running on port:", PORT);
})
