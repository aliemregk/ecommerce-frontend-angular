import { AuthResponse } from './../../../../model/models/auth/authResponse.model';
import { SessionService } from '../../../../model/services/session.service';
import { LoginModel } from './../../../../model/models/auth/login.model';
import { AuthService } from '../../../../model/services/auth.service';
import { NotificationService } from './../../../../../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router
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
      this.authService.login(loginModel).subscribe({
        next: (response) => {
          if (response.success) {
            this.sessionService.setSessionStatus(response.data);
            this.notificationService.success("Welcome " + response.data.user.firstName);
            this.router.navigate([""]);
          } else {
            this.notificationService.error(response.message);
          }
        },
        error: (errorResponse) => {
          this.notificationService.error(errorResponse.error.validationErrors);
        }
      });

    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }



}
