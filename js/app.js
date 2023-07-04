let tasks = [];


function addTask() {
 let taskInput = document.getElementById("taskInput");
 let taskList = document.getElementById("taskList");


 let taskText = taskInput.value;

  if (taskText !== "") {
   
    tasks.push(taskText);

 let taskItem = document.createElement("li");
    taskItem.textContent = taskText;


    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
      deleteTask(taskText);
    };
    taskItem.appendChild(deleteButton);


  let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function() {
      editTask(taskText);
    };
    taskItem.appendChild(editButton);

    taskList.appendChild(taskItem);

   
    taskInput.value = "";
  }
}


function deleteTask(task) {
  let index = tasks.indexOf(task);

  if (index !== -1) {

    tasks.splice(index, 1);

  
    let taskList = document.getElementById("taskList");
    taskList.removeChild(taskList.childNodes[index]);

    updateTaskList();
  }
}


function editTask(task) {
  let index = tasks.indexOf(task);

  if (index !== -1) {

    let newTaskText = prompt("Editar tarea:", task);

    if (newTaskText !== null && newTaskText !== "") {

      tasks[index] = newTaskText;

      let taskList = document.getElementById("taskList");
      let taskItem = taskList.childNodes[index];
      taskItem.textContent = newTaskText;


      updateTaskList();
    }
  }
}


function updateTaskList() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
   let taskText = tasks[i];

    let taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
      deleteTask(taskText);
    };
    taskItem.appendChild(deleteButton);

    let editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.onclick = function() {
      editTask(taskText);
    };
    tasks
  }
}