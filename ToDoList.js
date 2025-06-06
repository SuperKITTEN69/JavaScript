const todoList = [];

function showTasks() {
  console.clear();
  console.log("Your To-Do List:");
  todoList.forEach((task, index) => {
    const status = task.done ? "[✔]" : "[ ]";
    console.log(`${index + 1}. ${status} ${task.text}`);
  });
  console.log("\nUse: addTask('task'), toggleTask(index), deleteTask(index)");
}

function addTask(text) {
  todoList.push({ text, done: false });
  showTasks();
}

function toggleTask(index) {
  if (todoList[index - 1]) {
    todoList[index - 1].done = !todoList[index - 1].done;
  }
  showTasks();
}

function deleteTask(index) {
  if (todoList[index - 1]) {
    todoList.splice(index - 1, 1);
  }
  showTasks();
}

// Start with some tasks
addTask("Learn JavaScript");
addTask("Build a to-do list");
addTask("Publish on Github");
