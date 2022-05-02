const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URL)
    .then( db =>{
        console.log("Database Connected ");
        return db;
    }).catch(err => {
        console.log("Connection Refused "+err)
    });

module.exports = conn;