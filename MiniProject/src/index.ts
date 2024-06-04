console.log('hi');
// const btn = document.getElementById("btn"); // return type 是 HTMLelement｜null

// JavaScript解法: question mark operator (?)
// btn?.addEventListner

// TypeScript解法: 非空斷言操作符(!)
const btn = document.getElementById('btn')!;
//這告訴 TS 不要擔心，btn 一定不為空值，這時 hover 到 btn 時，type 會變成只有 HTMLelement

// region 類型斷言 Type Assertions

let mystery: unknown = 'hello world';
const numChars = (mystery as string).length;
// 並不會改變 mystery 的類型，只會在這行 context 中告訴 TypeScript mystery為字串

const input = document.getElementById('todoInput') as HTMLInputElement;
btn.addEventListener('click', () => {
  alert(input.value);
  // 在沒有告訴 TypeScript input 是 InputElement時此行會報錯，因為 document.getElementById 會 return HTMLElement | null ，
  // 而 HTMLElement 沒有 value 這個屬性
  input.value = '';
});

// end region 類型斷言 Type Assertions

// region Events
interface Todo {
  text: string;
  completed: boolean;
}

const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;
// form.addEventListener('submit', function (e) {
//   e.preventDefault(); // TS 透過查看上下文得知 e 是 submit event
//   console.log('submit');
// });

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos');
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

// 提交表單
const handleSubmit = (e: SubmitEvent) => {
  // TS 無法得知，必須主動告訴 TS e 是什麼
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = '';
};

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// 創建todo list LI元素
function createTodo(todo: Todo) {
  const newLI = document.createElement('LI');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener('submit', handleSubmit);

// end region Events
