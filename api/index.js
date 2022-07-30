                                                  
  ////                  ##%#%%%%%#(%%                  
  ////            ,######%#%(////////%%%%%(            
  ////       ####%*//*/      ////////%%%%%%%         
  ////       ##******* .(((/        /////%%%%%%%       
  ////     #*****%%#((((               ((/%%%%%%%%     
  ////   .***,###%((/                    ((#%%%%%%%%   
  ////  .,,(####%((/                       (%%%%%%%%&  
  ////  ,,#####%((                          (%%%%%%%%  
  //// ,*######(((                          (%%%%%%%%( 
  //// ,#######((                           (&%%%%%%(/ 
  //// #######(((                           #&&%%%&%// 
  ////  ######(((/                          #&&&&&//(  
  ////  .#####((((                         #%&&&&///*  
  ////    ####(((((                       ##&&/////,   
  ////     ####((((((                   #%%///////     
  ////       ###(((((((                  ///////       
  ////         %#((((((((((             ////%/         
  ////             (((((((((((((((((((%&%%             
  ////                   ((((((((((%                      

  
const { application } = require('express');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {// true hace q se borren las tablas
  server.listen(3001, () => {
    console.log('Puerto abierto en 3001'); // eslint-disable-line no-console
  });
});
