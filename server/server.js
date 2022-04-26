const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes.js');
require('dotenv').config({ path : "./config.env"});

const port = process.env.PORT;
const con = require('./db/connection');

//use middleware
app.use(cors());
app.use(express.json());

//use routes
app.use(routes);

con.then(db=>{
    if(!db) return process.exit(1);

    app.listen(port,()=>{
        console.log('Server is running on port : '+port);
    })
    app.on('error',err => console.log('Failed to Connect Server : '+err))
}).catch(err =>{
    console.log('DB ERROR : '+err);
})

