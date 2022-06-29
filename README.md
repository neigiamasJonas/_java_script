Kaip susiinstaliuoti Marija su nodemon ir expess :


1. cd server (failo direktorija)
2. npm init (susirashyt package.json info)
3. npm install express (serveris)
4. npm i mysql (Marija DB)
5. npm i nodemon (nodemon reikalingas, kad po pakeitimu iskarto pasirefreshintu ir rodytu pakitimus)
6. npm i cors (biblioteka, kuri sako, kad viskas yra ok narshyklej, kad ji vygdytu duota koda)

7. Paleidimas - node App.js
8. Kad nodemon veiktu (refreshinant puslapi) i package.json "scripts" yrashiti 
!!! "start": "nodemon App.js"


9. Tada i App.js isikopinti:

const express = require("express");
const app = express();
const port = 3006;
const cors = require("cors");

app.use(cors());

const mysql = require("mysql");

app.use(

    express.urlencoded({

        extended: true,

    })

);

app.use(express.json());


const con = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "",

    database: "ISIRASHOM DATABASE",

});

app.listen(port, () => {

    console.log(`Bebras klauso porto Nr ${port}`);

});



10. Paemimas info is Marija DB sukurtos DATOS

  ///////// medziai is MARIJA DB

app.get("/medukai", (req, res) => {
    const sql = `
    SELECT
    *
    FROM Medziai
  `;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

///////////////////////////////////




11. PALEIDZIANT HTMLE instaliuoti - npm install react-router-dom@6

i app irasashyti:


import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Back from "./Back"
import Front from "./Front"



function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Front></Front>}></Route>
                <Route path="/admin" element={<Back></Back>}></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

export default App;

