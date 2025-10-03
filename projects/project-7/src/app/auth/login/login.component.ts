import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

// custom validator function to email to check it is test.com domain
function emailIsUnique(control: AbstractControl){
  if(control.value !== 'test.com'){
    return of(null);
  }
  return of({ emailNotUnique: true });
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  // Reactive Form for connecting to the template
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.email, Validators.required],
      asyncValidators: [emailIsUnique]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  })

  onSubmit() {
    // get the form values
    console.log(this.form.value.email);
    console.log(this.form.value.password);    
  } 

  // getter for email field validity
  get emailIsInvalid() {
    return this.form.controls.email.invalid && this.form.controls.email.touched;
  }

  // getter for password field validity
  get passwordIsInvalid() {
    return this.form.controls.password.invalid && this.form.controls.password.touched;
  }
}
