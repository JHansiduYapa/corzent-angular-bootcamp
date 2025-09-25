import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule,],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  // add a event to close the new task form
  close = output<void>();
  // add output event to emit title, summery and dueDate of the new task
  add = output<INewTask>();
  
  // add properties for title, summery and dueDate
  enteredTitle = '';
  enteredSummery = '';
  enteredDueDate = '';

  // method to emit the close event
  onClose() {
    this.close.emit();
  }

  // method to submit the new task form
  onCreateTask() {
    // for now just log the entered values
    console.log('New Task:', this.enteredTitle, this.enteredSummery, this.enteredDueDate);
    
    // emit the add event with the entered values
    this.add.emit({
      title: this.enteredTitle,
      summery: this.enteredSummery,
      dueDate: this.enteredDueDate
    });

    // close the form after submitting
    this.onClose();
  }
}
