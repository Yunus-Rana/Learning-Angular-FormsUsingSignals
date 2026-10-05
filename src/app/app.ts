import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, pattern, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormField],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  loginModel = signal({ email: 'test@mail.com', password: 'pass123Pass' });

  loginForm = form(this.loginModel, (schema) => {
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Enter a valid email address' });

    required(schema.password, { message: 'Password is required' });
    minLength(schema.password, 8, { message: 'Password must be at least 8 characters long' });
    pattern(schema.password, /^(?=.*[A-Za-z])(?=.*\d)/, {
      message: 'Password must contain at least one letter and one number',
    });
  });

  submitForm() {
    if (this.loginForm().valid()) {
      console.log('Submitted Payload:', this.loginModel());
    } else {
      console.warn('Form contains validation errors:', this.loginForm().errors());
    }
  }

  reset() {
    this.loginModel.set({ email: '', password: '' });
  }
}
