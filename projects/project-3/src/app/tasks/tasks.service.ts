import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
  providedIn: "root",
})
export class TasksService {
    // Service methods and properties would go here
    tasks = signal<Task[]>([]);

    // make the add task method
    addTask(taskData: {title: string, description: string}) {
        const newTask : Task = {
            id: Math.random().toString(),
            title: taskData.title,
            description: taskData.description,
            status: 'OPEN'
        };
        this.tasks.update(oldTasks => [...oldTasks, newTask]);
        // console.log(this.tasks());
        console.log('Task added:', newTask);
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus){
        this.tasks.update(oldTasks => 
            oldTasks.map((task) => task.id === taskId? {...task, status: newStatus} : task)
        )
    }
}