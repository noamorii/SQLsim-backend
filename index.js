import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('SQL simulator')
})

app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server OK');
})
