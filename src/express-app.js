const express = require('express');
const cors  = require('cors');
const { UserRouter } = require('./api/routes');
const HandleErrors = require('./utils/error-handler')


module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    // app.use((req,res,next)=>{
    //     console.log(req);
    //     next();
    // })
    // Listen to Events
    // appEvent(app);

  

    //api
    NOTIFICATIONRouter(app);

    // error handling
    app.use(HandleErrors);
    
}