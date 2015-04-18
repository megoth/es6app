var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 8282;
var socket = require('socket.io');

var staticPath = path.resolve(__dirname, '.');
app.use(express.static(staticPath));
var io = socket.listen(app.listen(port));
var sockets = [];
io.sockets.on('connection', function (socket) {
  // setup
  sockets.push(socket);
  // events
  socket.on('isAskingForHelp', function (username, isAskingForHelp) {
    socket.username = username;
    socket.isAskingForHelp = isAskingForHelp;
  });
  socket.on('progress', function (slideStep) {
    socket.step = slideStep;
  });
});
setInterval(function () {
  sockets = sockets.filter(function (socket) {
    return socket.connected;
  });
  emitPleads(sockets);
  emitProgress(sockets);
}, 1000);

// plead functionality
function emitPleads(sockets) {
  var pleads = getPleadList(sockets);
  pleads.sort(function (a, b) {
    return a.progress - b.progress;
  });
  sockets.forEach(function (socket) {
    socket.emit('pleadsList', pleads);
  });
}

function getPleadList(sockets) {
  return sockets.filter(function (socket) {
    return socket.isAskingForHelp;
  }).map(function (socket) {
    return {
      username: socket.username,
      progress: socket.step
    }
  });
}

// progress functionality
function emitProgress(sockets) {
  var progressList = getProgressList(sockets);
  sockets.forEach(function (socket) {
    socket.emit('progressList', progressList);
  });
}

function getProgressList(sockets) {
  var progress = [];
  sockets.forEach(function (socket) {
    var step = socket.step;
    progress[step] = (progress[step] || 0) + 1;
  });
  return progress;
}