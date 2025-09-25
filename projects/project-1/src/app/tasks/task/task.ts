import { Component, inject, input, output } from '@angular/core';
import {ITask} from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrls: ['./task.css'],
  imports: [Card,Card, DatePipe]
})
export class Task {
  // make a property to recive task object
  task = input.required<ITask>();
  complete = output<string>();
  // inject the task service
  private taskService = inject(TaskService);

  onComplete(): void{
    // complete the task using the task service
    this.taskService.completeTask(this.task().id);
  }
}

