import { Router } from '@angular/router';
import { SessionService } from './../../../../model/services/session.service';
import { AuthService } from './../../../../model/services/auth.service';
import { RegisterModel } from './../../../../model/models/auth/register.model';
import { FormGroup, FormBuilder, Validators, FormControl, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../../../../shared/services/notification.service';
import { passwordStrength } from 'src/app/shared/validators/password-strength.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  protected registerForm!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  public get password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }
  public get confirmPassword(): FormControl {
    return this.registerForm.get("confirmPassword") as FormControl;
  }

  private createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, passwordStrength]],
      confirmPassword: ["", [Validators.required, passwordStrength]]
    }, { validators: this.checkPasswords });
  }

  private checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')!.value;
    let confirmPass = group.get('confirmPassword')!.value
    return pass === confirmPass ? null : { passwordMatch: true }
  }

  protected register() {
    if (this.registerForm.valid) {
      const registerModel: RegisterModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe({
        next: (response) => {
          this.sessionService.setSessionStatus(response.data);
          this.notificationService.success("Welcome " + response.data.user.firstName);
          this.router.navigate([""]);
        },
        error: (errorResponse) => {
          // TODO add a global error handler
          const [err]: string[] = Object.values(errorResponse.error)
          this.notificationService.error(err);
        }
      });
    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }
}
