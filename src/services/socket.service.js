class SocketService {
  constructor($rootScope) {
    var host = location.origin.replace(/^http/, 'ws');
    var socket = this.socket = io(host);
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