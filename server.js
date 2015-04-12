var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8282;
var socket = require('socket.io');

var staticPath = path.resolve(__dirname, '.');
app.use(express.static(staticPath));
var io = socket.listen(app.listen(port));
// var connections = [];
// var users = [];
io.sockets.on('connection', function (socket) {
  socket.emit('helpQueueUpdate', []);
  // socket.on('newMessage', function (message) {
  //   connections.forEach(function (oldSocket) {
  //     oldSocket.emit('newMessage', message);
  //   });
  // });
  // connections.push(socket);
});
