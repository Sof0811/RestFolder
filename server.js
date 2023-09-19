
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8000;
app.get("/", (req, res) => {
    const date = new Date();
    const pathName = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}`;
    const pathName2 = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    fs.writeFileSync(`./RestapiI Folder/${pathName}.txt`, pathName2);
    fs.readdir("./RestapiI Folder", (err, filename) => {
        if (err) {
            res.send('Files not getting!')
        } else {

            res.send(`${pathName2}<br/><br/> Files List:<br/>${filename.join('<br/>')}<br/>`)

        }
    })
})
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})