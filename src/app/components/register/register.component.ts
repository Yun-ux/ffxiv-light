import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registerUserForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
  });

  onSubmit() {
    // get the values from the input
    const username = this.registerUserForm.get('userName').value;
    const password = this.registerUserForm.get('password').value;
    const email = this.registerUserForm.get('email').value;
    console.log('Your username is ' + username);
    console.log('Your pw is :' + password);
    console.log('Your email is ' + email);
  }
  ngOnInit() {
  }

}
