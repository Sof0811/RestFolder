
const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 8000;
app.get("/", (req, res) => {
    const date = new Date();
<<<<<<< HEAD
    const pathName = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}`;
    const pathName2 = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}\n-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
=======
    const pathName = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}_${date.getHours()}_${date.getMinutes()}`;
    const pathName2 = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}\n-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
>>>>>>> master

    fs.writeFileSync(`./RestapiI Folder/${pathName}.txt`, pathName2);
    fs.readdir("./RestapiI Folder", (err, filename) => {
        if (err) {
<<<<<<< HEAD
            res.send('Files are not able to show!')
        } else {

            res.send(`${pathName2}<br/><br/> Files are:<br/>${filename.join('<br/>')}<br/>`)
=======
            res.send('Files not getting!')
        } else {

            res.send(`${pathName2}<br/><br/> Files List:<br/>${filename.join('<br/>')}<br/>`)
>>>>>>> master

        }
    })
})
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})