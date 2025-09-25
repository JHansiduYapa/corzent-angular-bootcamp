import { Injectable } from "@angular/core";
import { INewTask } from "./task/task.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    
    // add dummy tasks array with id, userId,title, summery, duedate
    tasks = [
        { id: 't1', userId: 'u1', title: 'Task 1', summery: 'This is task 1', dueDate: '2024-12-31' },
        { id: 't2', userId: 'u1', title: 'Task 2', summery: 'This is task 2', dueDate: '2024-11-30'},
        { id: 't3', userId: 'u2', title: 'Task 3', summery: 'This is task 3', dueDate: '2024-10-31' },
        { id: 't4', userId: 'u3', title: 'Task 4', summery: 'This is task 4', dueDate: '2024-09-30' }
    ]; 
    
    // method to get tasks for a user
    getTasksForUser(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }
    
    // method to add a new task using  INewTask interface
    addTask(newTask: INewTask, userId: string): void {
        const newTaskId = 't' + (this.tasks.length + 1);
        this.tasks.push({
            id: newTaskId,
            userId: userId,
            title: newTask.title,
            summery: newTask.summery,
            dueDate: newTask.dueDate
        });
    }

    // method to remove task from the tasks array when complete button is clicked
    completeTask(taskId: string): void {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

}


