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
    this.tasks = [{
      id : 1,
      name : 'task 1',
      deadLine : '20-4-2055',
      state : 'In Progress'
    },
    {
      id : 2,
      name : 'task 2',
      deadLine : '22-4-2055',
      state : 'Done'
    },
  ]
  };
  printTask() {
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
  }
};

const taskManager = new TaskManager();
taskManager.printTask();