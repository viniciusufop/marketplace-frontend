import { Component, OnInit } from '@angular/core';
import {SignupRequest} from '../models/request/sigup.request';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupRequest: SignupRequest;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

    this.signupRequest = new SignupRequest(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupRequest).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        alert('Seu cadastro foi realizado com sucesso! Efetue o login no sistema');
        this.router.navigate(['auth/login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
