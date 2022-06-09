import { printTodos } from "./printTodos";

const $form = document.querySelector(".new-task");
const $input = document.querySelector(".new-task > input");

function init(todos) {
  const checkTodo = (e) => {
    e.preventDefault();

    const todo = { title: $input.value, isDone: false };
    todos.push(todo);
    console.log(todos);

    $input.value = "";

    printTodos(todos);
  };

  $form.addEventListener("submit", checkTodo);
}

export { init };