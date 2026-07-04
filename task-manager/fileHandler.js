const fs = require("fs");

function saveTasks(filepath, tasks) {
    const jsonString = JSON.stringify(tasks);

    fs.writeFile(filepath, jsonString, function(err) {
        if (err) {console.log(err);}
    });
}

function loadTasks(filepath){
    if (fs.existsSync(filepath)){
        console.log("File exists!");
        const data = fs.readFileSync(filepath, "utf8");
        return JSON.parse(data);
    }
    else {
        console.log("File does not exist!");
        return [];
    }
}

module.exports = {saveTasks, loadTasks};