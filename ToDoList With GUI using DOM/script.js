let todos = [];

function addTodo() {
    const input = document.querySelector("input");
    const title = input.value.trim();
    if (title !== "") {
        todos.push({ title });
        input.value = "";
        render();
    }
}

function deleteFirstTodo() {
    todos.splice(0, 1);
    render();
}

function deleteLastTodo() {
    todos.splice(todos.length - 1, 1);
    render();
}

function deleteTodoAt(index) {
    todos.splice(index, 1);
    render();
}

function createTodoComponent(todo, index) {
    const div = document.createElement("div");
    div.className = "todo-item";

    const h2 = document.createElement("h2");
    h2.innerText = todo.title;

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.className = "delete-btn";
    button.addEventListener("click", function () {
        deleteTodoAt(index);
    });

    div.appendChild(h2);
    div.appendChild(button);
    return div;
}

function render() {
    const todoContainer = document.querySelector("#todos");
    todoContainer.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        const element = createTodoComponent(todos[i], i);
        todoContainer.appendChild(element);
    }
}
