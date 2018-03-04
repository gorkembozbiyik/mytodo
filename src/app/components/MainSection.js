import visibilityFilters from '../constants/VisibilityFilters';

class MainSectionController {
  /** @ngInject */
  constructor(todoService) {
    this.editing = false;
    this.editItem = {title: '', content: '', id: -1};
    this.todoService = todoService;
    this.selectedFilter = visibilityFilters[this.filter];
    this.completeReducer = (count, todo) => todo.completed ? count + 1 : count;
  }

  handleClearCompleted() {
    this.handleCancel();
    this.todos = this.todoService.clearCompleted(this.todos);
  }

  handleCompleteAll() {
    this.todos = this.todoService.completeAll(this.todos);
  }

  handleShow(filter) {
    this.filter = filter;
    this.selectedFilter = visibilityFilters[filter];
  }

  handleChange(id) {
    this.handleCancel();
    this.todos = this.todoService.completeTodo(id, this.todos);
  }

  handleCancel() {
    this.editing = false;
    this.editItem = {title: '', content: '', id: -1};
  }

  handleEdit(e) {
    this.editing = true;
    this.editItem = {title: e.title, content: e.content, id: e.id};
  }

  handleAdd() {
    if (!this.editing) {
      if (this.editItem.title.length !== 0) {
        this.todos = this.todoService.addTodo(this.editItem.title, this.editItem.content, this.todos);
      }
    }
  }

  handleSave() {
    if (this.editing) {
      if (this.editItem.title.length !== 0) {
        this.todos = this.todoService.editTodo(this.editItem.id, this.editItem.title, this.editItem.content, this.todos);
      }
    }
  }

  handleDestroy(e) {
    this.handleCancel();
    this.todos = this.todoService.deleteTodo(e, this.todos);
  }
}

export const MainSection = {
  template: require('./MainSection.html'),
  controller: MainSectionController,
  bindings: {
    todos: '=',
    filter: '<',
    editing: '<',
    editItem: '<'
  }
};
