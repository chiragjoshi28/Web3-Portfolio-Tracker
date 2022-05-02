const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes.js');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const path = require('path');
const con = require('./db/connection');

//use middleware
app.use(cors());
app.use(express.json());

//use routes
app.use(routes);

con.then(db=>{
    if(!db) return process.exit(1);

    // If in production, then use static frontend build files.
    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
        });
    }
    app.listen(port,()=>{
        console.log('Server is running on port : '+port);
    })
    app.on('error',err => console.log('Failed to Connect Server : '+err))
}).catch(err =>{
    console.log('DB ERROR : '+err);
})

