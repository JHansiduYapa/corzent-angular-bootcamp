import { Component, input, output } from '@angular/core';
import {ITask} from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class Task {
  // make a property to recive task object
  task = input.required<ITask>();
  complete = output<string>();

  onComplete(): void{
    this.complete.emit(this.task().id);
  }
}

