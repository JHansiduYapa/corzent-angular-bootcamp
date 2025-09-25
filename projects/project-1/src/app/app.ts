import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks"; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project-1');
  users = DUMMY_USERS;
  //selectedUserId = 'u1'; // Default selected user ID
  // selected user can be undefined initially
  selectedUserId? : string;

  // method to find user name by id
  getUserNameById(): string {
    const user = this.users.find(u => u.id === this.selectedUserId);
    return user ? user.name : 'Unknown User';
  }

  // when a user is selected, log the user id
  onUserSelected(userId: string) {
    this.selectedUserId = userId;
    console.log('User selected in App component:', userId);
  }
}
