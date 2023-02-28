import express from 'express';
import sqlite from 'sqlite3';

const app = express();
app.use(express.json);
let database;

database = new sqlite.Database('./databases/default.db', sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log('Database OK')
});

app.get('/', (req, res) => {
    res.send('SQL simulator')
})

app.listen(8080, (err) => {
    if (err) return console.log(err);
    console.log('Server OK');
})






