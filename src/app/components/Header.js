class HeaderController {
  /** @ngInject */
  constructor(todoService) {
    this.todoService = todoService;
  }
}

export const Header = {
  template: require('./Header.html'),
  controller: HeaderController,
  bindings: {
    todos: '='
  }
};
