import { Component , computed, input, Input, output, signal} from '@angular/core';

import {DUMMY_USERS} from '../dummy-users';

// get a random user from the DUMMY_USERS array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class User {
  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  // make a getter to return the user image
  // get userImage() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  // userImage = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // // make a method to select a user
  // onSelectUser() {
  //   console.log('User selected:', this.selectedUser.name);
  //   // change the selected user to another random user
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // @Input() userImageName!: string;
  // @Input() userName!: string;
  id = input.required<string>()
  userName = input.required<string>()
  userImageName = input.required<string>()
  select = output<string>()

  imagePath = computed(()=>{
    return 'assets/users/' + this.userImageName()
  });
  // get  imagePath() {
  //   return 'assets/users/' + this.userImageName();
  // }

  onUserClick() {
    // console.log('User clicked:', this.userName());
    this.select.emit(this.id());
  }

}
