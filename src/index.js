const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;

mongoose
  .connect(config.mongoose.url,config.mongoose.options)
  .then(() =>{
    console.log("Connected to DB at", config.mongoose.url)
    app.listen(config.port,()=>{
        console.log('Server Listening at port',config.port)
    })
  })
  .catch((error) => console.log("Failed to connect to DB\n", error));


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
