class SocketService {
  constructor($rootScope) {
    var socket = this.socket = io('http://localhost:8282');
    $rootScope.$on('$destroy', function () {
      socket.emit('disconnect');
    });
  }

  emitAskingForHelp(username, isAskingForHelp) {
    this.socket.emit('isAskingForHelp', username, isAskingForHelp);
  }

  onPleadsUpdate(eventListener) {
    this.socket.on('pleadsList', eventListener);
  }

  emitProgress(slide) {
    this.socket.emit('progress', slide.step);
  }

  onProgressUpdate(eventListener) {
    this.socket.on('progressList', eventListener);
  }
}

export default SocketService;