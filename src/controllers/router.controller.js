class RouterController {
  constructor(socketService, $state) {
    socketService.emitProgress($state.current.slide);
  }
}

export default RouterController;