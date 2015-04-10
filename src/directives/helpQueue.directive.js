class HelpQueueDirective {
  constructor() {
    return function (scope, element) {
      element.html('<h2>Help-queue</h2>');
    };
  }
}

export default HelpQueueDirective;