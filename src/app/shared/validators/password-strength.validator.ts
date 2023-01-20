import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordStrength(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /\d+/.test(value);
    const isPasswordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !isPasswordValid ? { passwordStrength: true } : null;
}