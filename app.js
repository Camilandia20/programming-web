function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    // Validar que no esté vacío
    if (taskText === '') {
        alert('Por favor escribe una tarea');
        return;
    }

    // Crear objeto de tarea
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Agregar al array
    tasks.push(task);

    // Limpiar input
    input.value = '';

    // Actualizar vista
    renderTasks();
}