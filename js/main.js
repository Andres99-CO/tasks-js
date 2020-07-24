// console.log(document.getElementById('formTask'));
window.onload = function () {
    document.getElementById('formTask').addEventListener('submit', saveTask);
    updateDashboardTask();

    function saveTask(e) {
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        // Válidar formulario
        if (title.trim() != '' && description.trim() != '') {
            // Crear objeto
            const task = {
                title,
                description
            };
            // Evaluar si existe en el localStorage
            if (localStorage.getItem("task") === null) {
                let tasks = [];
                tasks.push(task);
                localStorage.setItem("task", JSON.stringify(tasks));
                updateDashboardTask();
            } else {
                let tasks = JSON.parse(localStorage.getItem('task'));
                console.log(tasks);
                tasks.push(task);
                localStorage.setItem("task", JSON.stringify(tasks));
                updateDashboardTask();
            }
        } else {
            alert('Por favor, ingrese un valor válido.');
        }
        e.preventDefault();
    }

    function updateDashboardTask() {
        // Añadir al tablero
        let tasks = JSON.parse(localStorage.getItem('task'));
        let divTask = document.getElementById('tasks');
        if (tasks) {
            for (const task of tasks) {
                let taskDesc = document.createElement('div');
                taskDesc.classList.add('alert', 'alert-success');
                taskDesc.textContent = `${task.title} | ${task.description}`;
                divTask.appendChild(taskDesc);
            }
        }
    }
}

