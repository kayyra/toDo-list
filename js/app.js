let tasksList = [];
let addTasks = [];


function addTasks() {
    let tasks = document.getElementById("tasks").value
    tasksList.push(tasks);

    showTasks();
    modifyTasks();
    deleteTasks();
    cleanWindow();
}

function showTasks(){
    let tasksListHTML = document.getElementById("tasksList");
    tasksListHTML.innerHTML = "";

    

    for (let i = 0; i < tasksList.length; i++) {
        let tasks = tasksList[i];
        let tasksHTML = "<li>" + tasks + "<button onclick='deleteTasks(" + i + ")'>Delete</button></li>";
        listHTML.innerHTML += listHTMLL;
    }

}

function modifyTasks(){
    for (let i = 0 ; i < tasksList.length; i++) {
        let tasks = tasksList[i];
        let tasksHTML = "<li>" + tasks + "<button onclick='modifyTasks(" + i +")'>Modify</button></li>";
        tasksListHTML.innerHTML += listHTML;
    }
}

  

function modifyTasks(index){
    tasksList.splice(index, 1);
    modifyTasks();
}

function deleteTasks(index) {
    tasksList.splice(index, 1);
    showTasks();
}

function cleanWindow() {
    document.getElementById("tasks").value = "";
}