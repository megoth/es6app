class HelpQueueService {
  constructor() {
    this.socket = io('http://localhost:8282');
    this.users = [];
    this.listeners = [];
    this.socket.on('helpQueueUpdate', function (users) {
      this.users = users;
      this.listeners.forEach(function (listener) {
        listener(users);
      });
    }.bind(this));
  }

  onUpdate(listener) {
    this.listeners.push(listener);
  }
}

export default new HelpQueueService();