import { Component, ElementRef, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  form = viewChild<ElementRef<HTMLFormElement>>('form');
  // make a output event to send the data to the ticket component
  add = output<{title: string, request: string}>();

  onSubmit(title: string, request: string) {
    console.log("Form submitted");
    console.log("Title: ", title);
    console.log("Request: ", request);
    
    // reset the form after submission
    this.form()?.nativeElement.reset();

    // emit the event 
    this.add.emit({title: title, request: request});
  }

}
