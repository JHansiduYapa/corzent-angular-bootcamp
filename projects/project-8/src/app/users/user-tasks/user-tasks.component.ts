import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet } from "../../../../node_modules/@angular/router/index";
import { TasksComponent } from "../../tasks/tasks.component";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [TasksComponent],
})
export class UserTasksComponent {
  userId = input.required<string>();
  private userService = inject(UsersService);

  userName = computed(() => {
    const user = this.userService.users.find(
      (user) => user.id === this.userId()
    );
    return user ? user.name : 'Unknown User';
  });
  
}
