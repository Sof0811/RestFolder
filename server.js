//express is an 3rd party library
const express = require('express');

//the express() will return all of its methods and properties in app variable
const app = express();//using app variable we can access everything of express()
const fs = require('fs');
const PORT = 7000;


//using express i changed from nodejs code into webserver
//using express api
app.get("/", (req, res) => {

    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()]
    const pathName = `${date.getFullYear()}_${date.getMonth() + 1}_${date.getDate()}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
    const pathName2 = `Date:${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}\nTime:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}\nDay:${day}`;

    fs.writeFileSync(`./API Folder/${pathName}.txt`, pathName2);
    //reading the whole folder
    fs.readdir("./API Folder", (err, filename) => {
        if (err) {
            res.send('Directory files are not able to show!')
        } else {
            // res.send(`${pathName2}\n Directory files are:\n${filename.join("\n")}\n`)

            res.send(`${pathName2}<br/><br/> Directory files are:<br/>${filename.join('<br/>')}<br/>`)

        }
    })
})



//additional task with UI based output


app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
})