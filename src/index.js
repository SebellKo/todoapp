import { printTodos } from "./printTodos";
import { init as initForm } from "./form";
import { get as getStorage } from "./storage";
import "./app.css";


const todos = getStorage() || [];

const print = () => {
  printTodos(todos);
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  print();
};

const toggleTodo = (index) => {
  todos[index].isDone = !todos[index].isDone;
  print();
};

document.body.addEventListener("click", (e) => {
  const index = parseInt(e.target.parentNode.dataset.index, 10); // 부모의 인덱스 가져오기

  if (e.target.className === "delete") {
    deleteTodo(index);
  } else if (e.target.className === "toggle-checked") {
    toggleTodo(index);
  }
});

initForm(todos);
print();