import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  username: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) { 
    this.username = this.fb.control("", Validators.required);
    this.email = this.fb.control("", Validators.required);
    this.password = this.fb.control("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.myForm = this.fb.group({
      "username": this.username,
      "email": this.email,
      "password": this.password
    });
  }

  ngOnInit() {}

  public signup(): void {
    const username = this.myForm.value.username;
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;

    console.log(username + email + password);
    
  }


}
