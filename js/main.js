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

}    

function updateDashboardTask() {
    // Añadir al tablero
    let tasks = JSON.parse(localStorage.getItem('task'));
    let divTask = document.getElementById('tasks');
    divTask.innerHTML = '';

    if (tasks) {
        for (let [index, task] of tasks.entries()) {
            // let taskDesc = document.createElement('div');
            // taskDesc.classList.add('alert', 'alert-success');
            // taskDesc.textContent = `${task.title} | ${task.description}`;
            // divTask.appendChild(taskDesc);
            divTask.innerHTML += `
                <div class="card mt-2">
                    <div class="card-header d-flex justify-content-between">
                        <div class="text-header">${task.title}</div>
                        <span class="btn btn-danger remove-task" data-id="${index}" onclick="deleteTask(this)"><i class="fa fa-times" aria-hidden="true"></i></span>
                    </div>
                    <div class="card-body">
                        <div class="text-body">${task.description}</div>
                    </div>
                </div>`;
        }
    }
}

function deleteTask(e) {
    // Obtener el id para eliminar elemento del array
    let tasks = JSON.parse(localStorage.getItem('task'));
    const $id = parseInt(e.getAttribute('data-id'));
    tasks.splice($id, 1);
    localStorage.setItem('task', JSON.stringify(tasks));
    updateDashboardTask();
}

