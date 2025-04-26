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
      new Task(1, 'task 1', new Date('2055-04-20'), 'In Progress'),
      new Task(2, 'task 2', new Date('2055-04-22'), 'Done')
  ]
  };
  printTasks() {
    let tasksHTML = ``;
    this.tasks.forEach(task => {
      tasksHTML += `        
      <tr>
          <td>${task.id}</td>
          <td>${task.name}</td>
          <td>${task.deadLine.toLocaleDateString()}</td>
          <td>${task.state}</td>
          <td>
            <div class="task-buttons">
              <button class="task-delete-button">Delete</button>
              <button class="task-edit-button" onclick="taskManager.showEditPopup(${task.id});">edit</button>
            </div>
          </td>
        </tr>
      `
    });
    document.querySelector('.js-table-body').innerHTML = tasksHTML;
  };
  addTask(){
    const taskID = this.tasks.length + 1;
    const taskState = 'In Progress';
    const taskDeadLine = document.querySelector('.add-popup-deadLine-input').value;
    const taskName = document.querySelector('.add-popup-task-input').value;
    if(taskName === '' || taskDeadLine === '') {
      alert('the task deadline and taks details are required');
    }  
    else{
      this.tasks.push(new Task(taskID,taskName,taskDeadLine,taskState)); 
      document.querySelector('.add-popup-section').style.display ='none';
      document.querySelector('.add-popup-deadLine-input').value = '';
      document.querySelector('.add-popup-task-input').value= '';
    }
    this.printTasks();
  };
  showAddPopup(){
    document.querySelector('.add-popup-section').style.display ='flex';
  };
  closeAddPopup(){
    document.querySelector('.add-popup-section').style.display ='none';
  };
  showEditPopup(taskID){
    document.querySelector('.edit-popup-section').style.display ='flex';
    const task = this.tasks[taskID - 1]
    document.querySelector('.edit-popup-task-input').value = task.name;
    document.querySelector('.edit-popup-state-input').value = task.state;
    document.querySelector('.edit-popup-deadLine-input').value = task.deadLine.toISOString().slice(0, 10);  
  };
  closeEditPopup(){
    document.querySelector('.edit-popup-section').style.display ='none';
  };
  editTask(){

  }
};

const taskManager = new TaskManager();
taskManager.printTasks();
