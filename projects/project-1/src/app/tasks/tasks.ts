import { Component, input } from '@angular/core';
import { Task } from "./task/task";
import { INewTask } from "./task/task.model"
import { NewTask } from './new-task/new-task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask],
  providers: [TaskService],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  // get the input of the selected user name
  userId = input.required<string>();
  name = input.required<string>();
  isAddingTask = false;

  // make a constructor to inject the TaskService
  constructor(private taskService: TaskService) {
    // add tasks to the local storage
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.taskService.tasks = JSON.parse(tasks);
    }

  }
  
  // add dummy tasks array with id, userId,title, summery, duedate
  tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', summery: 'This is task 1', dueDate: '2024-12-31' },
    { id: 't2', userId: 'u1', title: 'Task 2', summery: 'This is task 2', dueDate: '2024-11-30'},
    { id: 't3', userId: 'u2', title: 'Task 3', summery: 'This is task 3', dueDate: '2024-10-31' },
    { id: 't4', userId: 'u3', title: 'Task 4', summery: 'This is task 4', dueDate: '2024-09-30' }
  ];

  // get tasks for the selected user
  get selectedTasks() {
    return this.taskService.getTasksForUser(this.userId());
  }

  // method to remove task from the tasks array when complete button is clicked
  onCompleteTask(taskId: string): void {
    this.taskService.completeTask(taskId);
  }

  // method to show the new task form
  addTask(): void {
    this.isAddingTask = true;
  }

  // method to add the new task to the tasks array
  onAddNewTask(newTask: INewTask): void {
    this.taskService.addTask(newTask, this.userId());
    this.isAddingTask = false;
    this.saveTasks();
  } 

  // cancel adding a new task
  onCancelAddTask(): void {
    this.isAddingTask = false;
    this.saveTasks(); 
  }

  // save tasks to the local storage 
  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.taskService.tasks));
  }
}
