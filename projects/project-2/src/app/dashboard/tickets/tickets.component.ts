import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  // make a array of tickets
  tickets : Ticket[] = [];

  onAdd(ticketData:{title: string, request: string}){
    // make a ticket and add to the Ticket array
    const ticket: Ticket = {
      title: ticketData.title,
      id:Math.random(),
      request: ticketData.request,
      status: 'open'
    }
    this.tickets.push(ticket);
  }
}
