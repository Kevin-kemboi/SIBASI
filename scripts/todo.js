document.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const categorySelect = document.getElementById('task-category');
    const toast = document.getElementById('toast');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
  
    function showToast(message, type) {
      toast.textContent = message;
      toast.className = `toast ${type}`;
      setTimeout(() => toast.className = 'toast hidden', 3000);
    }
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.draggable = true;
        li.dataset.index = index;
        li.className = task.completed ? 'completed' : '';
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        const category = document.createElement('span');
        category.className = 'category';
        category.textContent = `(${task.category})`;
        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.className = 'complete-btn';
        completeBtn.onclick = () => toggleComplete(index);
        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.className = 'edit-btn';
        editBtn.onclick = () => editTask(index);
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTask(index);
        li.append(completeBtn, taskText, category, editBtn, deleteBtn);
        taskList.appendChild(li);
      });
    }
  
    function addTask() {
      const text = newTaskInput.value.trim();
      if (!text) {
        showToast('Task cannot be empty', 'error');
        return;
      }
      tasks.push({ text, category: categorySelect.value, completed: false });
      newTaskInput.value = '';
      saveTasks();
      renderTasks();
      showToast('Task added!', 'success');
    }
  
    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      if (tasks[index].completed) {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      saveTasks();
      renderTasks();
    }
  
    function editTask(index) {
      const newText = prompt('Edit task:', tasks[index].text);
      if (newText !== null && newText.trim()) {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
        showToast('Task updated!', 'success');
      }
    }
  
    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
      showToast('Task deleted!', 'success');
    }
  
    // Drag-and-Drop
    taskList.addEventListener('dragstart', (e) => {
      e.target.classList.add('dragging');
      e.dataTransfer.setData('text/plain', e.target.dataset.index);
    });
  
    taskList.addEventListener('dragend', (e) => {
      e.target.classList.remove('dragging');
    });
  
    taskList.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    taskList.addEventListener('drop', (e) => {
      e.preventDefault();
      const fromIndex = e.dataTransfer.getData('text/plain');
      const toIndex = [...taskList.children].indexOf(e.target.closest('li'));
      if (fromIndex !== toIndex) {
        const [task] = tasks.splice(fromIndex, 1);
        tasks.splice(toIndex, 0, task);
        saveTasks();
        renderTasks();
      }
    });
  
    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  
    renderTasks();
  }); 
