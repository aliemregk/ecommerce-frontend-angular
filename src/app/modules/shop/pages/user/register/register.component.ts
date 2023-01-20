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
    private readonly notificationService: NotificationService
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
      name: ["", Validators.required],
      address: ["", Validators.required],
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
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      // TODO add auth service
      console.log(this.registerForm);
    } else {
      this.notificationService.error("Please check the information you entered.");
    }
  }
}
