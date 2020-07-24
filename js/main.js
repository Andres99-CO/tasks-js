// console.log(document.getElementById('formTask'));
window.onload = function () {
    document.getElementById('formTask').addEventListener('submit', saveTask);

    function saveTask(e) {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        // console.log(title);
        // console.log(description);
        const task = {
            title,
            description
        };
        if (localStorage.getItem("task") === null) {
            let tasks = [];
            tasks.push(task);
            localStorage.setItem("task", JSON.stringify(tasks));
        } else {
            let tasks = JSON.parse(localStorage.getItem('task'));
            console.log(tasks);
            tasks.push(task);
            localStorage.setItem("task", JSON.stringify(tasks));
        }
        // console.log(JSON.parse(localStorage.getItem('task')));
        e.preventDefault();
    }

    function updateDashboardTask() {
        $tasks = JSON.parse(localStorage.getItem('task'));

        
    }
}

