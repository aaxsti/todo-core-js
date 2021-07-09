class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('add', this.addTodo.bind(this));
        view.on('toggle', this.toggleTodo.bind(this));
        view.on('edit', this.editTodo.bind(this));
        view.on('delete', this.deleteTodo.bind(this));

        view.show(model.items);
    }

    addTodo(title) {
        const todo = this.model.addItem({
            id: Date.now(),
            title,
            completed: false
        });

        this.view.addItem(todo);
    }

    toggleTodo({id, completed}) {
        const todo = this.model.updateItem(id, {completed});

        this.view.toggleItem(todo);
    }

    editTodo({id, title}) {
        const todo = this.model.updateItem(id, {title});

        this.view.editItem(todo);
    }

    deleteTodo(id) {
        this.model.deleteItem(id);

        this.view.deleteItem(id);
    }
}

export default Controller;