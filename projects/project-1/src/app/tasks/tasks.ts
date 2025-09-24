import { Component, input } from '@angular/core';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class Tasks {
  // get the input of the selected user name
  userId = input.required<string>();
  name = input.required<string>();
  
  // add dummy tasks array with id, userId,title, summery, duedate
  tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', summery: 'This is task 1', dueDate: '2024-12-31' },
    { id: 't2', userId: 'u1', title: 'Task 2', summery: 'This is task 2', dueDate: '2024-11-30'},
    { id: 't3', userId: 'u2', title: 'Task 3', summery: 'This is task 3', dueDate: '2024-10-31' },
    { id: 't4', userId: 'u3', title: 'Task 4', summery: 'This is task 4', dueDate: '2024-09-30' }
  ];

  // get tasks for the selected user
  get selectedTasks() {
    return this.tasks.filter(task => task.userId === this.userId());
  }

  // method to remove task from the tasks array when complete button is clicked
  onCompleteTask(taskId: string): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
