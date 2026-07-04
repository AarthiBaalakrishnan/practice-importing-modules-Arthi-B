function addTasks(tasks, task){
    tasks.push(task);
    return tasks;
}

function listTasks(tasks){
    console.log(...tasks);
}

module.exports = { addTasks, listTasks };