function onReady() {
  const addToDoForm = document.getElementById('addToDo');
  const newToDoText = document.getElementById('newToDoText');
  const taskList = document.getElementById('taskList');

  addToDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.textContent = task;
    newLi.appendChild(checkbox);
    taskList.appendChild(newLi);
    newToDoText.value = "";
  });
}

window.onload = function() {
  onReady();
};
