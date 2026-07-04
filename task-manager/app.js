const taskManager = require("./taskManager.js");
const fileHandler = require("./fileHandler.js");

const path = require("path");

const myLocalFile = path.join(__dirname, 'tasks.json');

let tasks = fileHandler.loadTasks(myLocalFile);

taskManager.listTasks(tasks);
tasks = taskManager.addTasks(tasks, "Wash the dishes");
taskManager.listTasks(tasks);

fileHandler.saveTasks(myLocalFile, tasks);

// console.log(taskManager.addTasks("Wash the dishes"));
// console.log(taskManager.listTasks());

// console.log(fileHandler.saveTasks(myLocalFile));
// console.log(fileHandler.loadTasks(myLocalFile, tasks));