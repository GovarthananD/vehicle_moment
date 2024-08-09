const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
let vehiclePosition = { lat: 37.7749, lng: -122.4194 };

setInterval(() => {
    vehiclePosition.lat += 0.0001;
    vehiclePosition.lng += 0.0001;
  
 
    io.emit('vehiclePosition', vehiclePosition);
  }, 1000); 
  
  server.listen(6000, () => {
    console.log('Server listening on port 6000');
  });