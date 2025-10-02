import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    
    if (!formData.valid) {      
      return;
    }
    const enteredEmail = formData.value.email;
    const enteredPassword = formData.value.password;
    console.log(enteredEmail, enteredPassword);
    formData.reset();

  }
}
