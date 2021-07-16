const express = require('express');
const cors = require('cors');
const apiRouter = require('./router/apiRouter')

const port = 4000;

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); 

app.listen(port,()=>{
    console.log('Server at port: ', port)
})

app.use('/api', apiRouter)