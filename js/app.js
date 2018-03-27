function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDo');

  function createNewTask() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    newToDoText.value = "";
    renderTheUI();
  };

  function deleteTask(id) {
    return toDos.filter(toDo => toDo.id !== id);
  }

  function renderTheUI() {
    let taskList = document.getElementById('taskList');

    taskList.textContent="";

    toDos.forEach(function(toDo) {
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      let deleteButton = document.createElement('button');


      checkbox.type = 'checkbox';

      newLi.textContent = toDo.title;

      deleteButton.textContent = "Delete";

      taskList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        toDos = deleteTask(toDo.id);
        renderTheUI();
      });

    });
  }

  addToDoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createNewTask();
    renderTheUI();
  });


  renderTheUI();

}

window.onload = function() {
  onReady();
};
