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




AUTH

1. npm i js-md5 (i server)
2. npm i uuid (i server)
3. Isikeltei i app.js dvi eilutes:
    const md5 = require('js-md5');
    const uuid = require('uuid');
    
4. AUTORIZACIJA i app.js

const doAuth = function(req, res, next) {
    if (0 === req.url.indexOf('/admin')) {
        const sql = `
        SELECT
        name
        FROM users
        WHERE session = ?
    `;
        con.query(
            sql, [req.headers['authorization'] || ''],
            (err, results) => {
                if (err) throw err;
                if (!results.length) {
                    res.status(401).send({});
                    req.connection.destroy();
                } else {
                    next();
                }
            }
        );
    } else {
        next();
    }
}
app.use(doAuth)

// Route
app.get("/", (req, res) => {
    res.send("Hello Barsukai!");
});


app.get("/admin/hello", (req, res) => {
    res.send("Hello Admin!");
});

app.get("/login-check", (req, res) => {
    const sql = `
    SELECT
    name
    FROM users
    WHERE session = ?
    `;
    con.query(sql, [req.headers['authorization'] || ''], (err, result) => {
        if (err) throw err;
        if (!result.length) {
            res.send({ msg: 'error' });
        } else {
            res.send({ msg: 'ok' });
        }
    });
});


app.post("/login", (req, res) => {
    const key = uuid.v4();
    const sql = `
    UPDATE users
    SET session = ?
    WHERE name = ? AND pass = ?
  `;
    con.query(sql, [key, req.body.user, md5(req.body.pass)], (err, result) => {
        if (err) throw err;
        if (!result.affectedRows) {
            res.send({ msg: 'error', key: '' });
        } else {
            res.send({ msg: 'ok', key });
        }
    });
});
