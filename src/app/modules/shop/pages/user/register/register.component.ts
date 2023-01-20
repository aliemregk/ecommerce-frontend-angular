import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from './../../../../../shared/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  protected registerForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]]
    });
  }

  protected register() {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      // TODO add auth service
      console.log(this.registerForm);
    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }
}
