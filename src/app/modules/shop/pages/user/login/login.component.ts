import { LoginModel } from './../../../../model/models/auth/login.model';
import { AuthService } from '../../../../model/services/auth.service';
import { NotificationService } from './../../../../../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected loginForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createLoginform();
  }

  private createLoginform(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  protected login(): void {
    if (this.loginForm.valid) {
      const loginModel: LoginModel = Object.assign({}, this.loginForm.value);
      console.log(loginModel);
      // TODO
      this.authService.login(loginModel).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });

    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }

}
