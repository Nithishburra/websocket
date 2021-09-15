//import http server.
//http module is a predefined module.
//http module is used to create the http server.
 const http = require("http");


 //import websocket module.
 //websocket module is used to create the chat server.
 const server = require("websocket").server;


 // assinging the port number to the chat server.
  let socket = new server({
     httpServer : http.createServer().listen(9090,()=>{
           console.log("server listening to the port number 9090");
     })
   
  });



  //connection request
  // reading msgs
  // sending msgs
  socket.on("request",function(request){
      let connection = request.accept(null,request.origin)
      connection.on("message",function(message){
      connection.send(message.utf8data);// by default msg is is in bytecode. so in order to convert byte code to string we have to vall utf8.data.
      connection.send("hello-1");
      connection.send("hello-2");
          setTimeout(()=>{
            connection.send("hello-3");

      },10000);

     // setInterval(()=>{
     //   connection.send(new Date().toLocaleTimeString());
      //},1000);
      });

      connection.on("close",function(connection){
          console.log("connection closed");
      })
      
  });   
