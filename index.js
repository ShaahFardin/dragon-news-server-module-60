const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require('./catagories.json')


app.get('/', (req, res)=>{
    res.send("news apin running");
})

app.get('/news-catagories', (req, res) =>{
    res.send(catagories)
})


app.listen(port, ()=>{
    console.log('dragon news rinnig in port 5000', port);
})