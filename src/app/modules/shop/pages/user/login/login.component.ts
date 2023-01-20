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
    private readonly notificationService: NotificationService
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
      // TODO add auth service
      console.log(this.loginForm);
    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }

}
