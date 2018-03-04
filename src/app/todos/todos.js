export const initialTodo = {
  title: 'Angular JS Project',
  content: 'Editing TODO List with Angular JS',
  completed: false,
  id: 0
};

export class TodoService {
  addTodo(title, content, todos) {
    return todos.concat([
      {
        id: (todos.length === 0) ? 0 : todos[todos.length - 1].id + 1,
        completed: false,
        title,
        content
      }
    ]);
  }

  completeTodo(id, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id, todos) {
    todos = todos.filter(todo => todo.id !== id);
    return todos.map(todo => {
      return todo.id > id ?
        Object.assign({}, todo, {id: todo.id - 1}) :
        todo;
    });
  }

  editTodo(id, title, content, todos) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {title, content}) :
        todo;
    });
  }

  completeAll(todos) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

