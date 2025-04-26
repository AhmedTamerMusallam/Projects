class Task {
  id;
  name;
  deadLine;
  state;

  constructor(id, name, deadLine, state) {
    this.id = id;
    this.name = name;
    this.deadLine = deadLine;
    this.state = state;
  }};

class TaskManager{
  constructor(){
    this.tasks = [
      new Task(1, 'task 1', '20-4-2055', 'In Progress'),
      new Task(2, 'task 2', '22-4-2055', 'Done')
  ]
  };
  printTasks() {
    let tasksHTML = ``;
    this.tasks.forEach(task => {
      tasksHTML += `        
      <tr>
          <td>${task.id}</td>
          <td>${task.name}</td>
          <td>${task.deadLine}</td>
          <td>${task.state}</td>
          <td>
            <div class="task-buttons">
              <button class="task-delete-button">Delete</button>
              <button class="task-edit-button">edit</button>
            </div>
          </td>
        </tr>
      `
    });
    document.querySelector('.js-table-body').innerHTML = tasksHTML;
  };
  addTask(){
    const taskID = this.tasks.length + 1;
    const taskName = document.querySelector('.popup-task-input').value;
    const taskDeadLine = document.querySelector('.popup-deadLine-input').value;
    const taskState = 'In Progress';
    this.tasks.push(new Task(taskID,taskName,taskDeadLine,taskState))
    document.querySelector('.add-popup-section').style.display ='none';
    this.printTasks();
  };
  showAddPopup(){
    document.querySelector('.add-popup-section').style.display ='flex';
  }
};

const taskManager = new TaskManager();
taskManager.printTasks();