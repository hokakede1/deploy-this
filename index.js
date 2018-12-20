const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
const port = process.env.PORT || 80;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/build` ) );

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'build','index.html'));
})

app.listen(port, () => {
    console.log('server is listening on port ', port)
})