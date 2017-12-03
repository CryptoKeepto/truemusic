import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.email = this.fb.control("", Validators.required);
    this.password = this.fb.control("", Validators.compose([Validators.required, Validators.minLength(6)]));
    this.myForm = this.fb.group({
      "email": this.email,
      "password": this.password
    });
  }

  ngOnInit() {}

  private login(): void {
    let email = this.myForm.value.email;
    let password = this.myForm.value.password;

    this.authService.postLogin(email, password).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err),
      () => {}
    );
  }

}
