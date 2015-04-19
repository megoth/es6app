class SocketService {
  constructor($rootScope) {
    var host = location.origin.replace(/^http/, 'ws');
    var socket = this.socket = io(host);
  }

  emitAskingForHelp(username, isAskingForHelp) {
    this.socket.emit('isAskingForHelp', username, isAskingForHelp);
  }

  onPleadsUpdate(eventListener) {
    this.socket.on('updatePleadsList', eventListener);
  }

  emitProgress(slide) {
    this.socket.emit('updateProgress', slide.step);
  }

  onProgressUpdate(eventListener) {
    this.socket.on('updateProgressList', eventListener);
  }
}

export default SocketService;