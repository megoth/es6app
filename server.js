var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8282;
var socket = require('socket.io');

var staticPath = path.resolve(__dirname, '.');
app.use(express.static(staticPath));
var io = socket.listen(app.listen(port));
var connections = {};
var slides = [];
io.sockets.on('connection', function (socket) {
  console.log('connected:', socket.id);
  connections[socket.id] = socket;
  socket.on('progress', function (slideStep) {
    console.log('progress', socket.id, slideStep);
    connections[socket.id].step = slideStep;
    var progressList = getProgressList(connections);
    Object.keys(connections).forEach(function (socketId) {
      connections[socketId].emit('progressList', progressList);
    });
  });
  socket.on('disconnect', function () {
    delete connections[socket.id];
    console.log('disconnected:', socket.id);
  })
});

function getProgressList(connections) {
  var progress = [];
  Object.keys(connections).forEach(function (socketId) {
    var step = connections[socketId].step;
    progress[step] = (progress[step] || 0) + 1;
  });
  return progress;
}