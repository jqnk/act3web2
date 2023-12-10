<script>
    // Modelo
    const model = {
        tasks: []
    };

    // Vista
    const view = {
        renderTasks: function () {
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            model.tasks.forEach((task, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = task;
                taskList.appendChild(listItem);
            });
        }
    };

    // Controlador
    const controller = {
        addTask: function () {
            const taskInput = document.getElementById('taskInput');
            const newTask = taskInput.value;

            if (newTask.trim() !== '') {
                model.tasks.push(newTask);
                view.renderTasks();
                taskInput.value = '';
            }
        }
    };

    // Inicializar la vista
    view.renderTasks();

    // Función para agregar tarea desde el controlador
    function addTask() {
        controller.addTask();
    }
</script>

<!-- Bootstrap JS y dependencias -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</body>
</html>