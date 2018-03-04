class TodoItemController {
  constructor() {
    this.editing = false;
  }

  handleEdit(title, content) {
    this.onEdit({
      todo: {
        title,
        content,
        id: this.todo.id
      }
    });
    this.editing = true;
  }

  handleDestroy(id) {
    this.onDestroy({id});
  }
}

export const TodoItem = {
  template: require('./TodoItem.html'),
  controller: TodoItemController,
  bindings: {
    todo: '<',
    onDestroy: '&',
    onChange: '&',
    onEdit: '&'
  }
};
