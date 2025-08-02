import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
})
export class AuthLayoutComponent {
  isLogin = false;
  signinForm: FormGroup = this.fb.group({
    username: ['', Validators.compose([Validators.required])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });
  signupForm: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.required])],
    username: ['', Validators.compose([Validators.required])],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    acceptTerms: [false, Validators.compose([Validators.requiredTrue])],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Auto-detect current mode from route
    this.isLogin = this.router.url.includes('login');
  }

  toggle() {
    this.isLogin = !this.isLogin;
  }

  get getRegisterStyle() {
    return !this.isLogin
      ? 'text-white border-2 border-[var(--button-primary-bg)]'
      : 'text-[var(--text-muted)]';
  }
  get getLoginStyle() {
    return this.isLogin
      ? 'text-white border-2 border-[var(--button-primary-bg)]'
      : 'text-[var(--text-muted)]';
  }

  onSignIn() {
    if (this.signinForm.invalid) {
      this.signinForm.markAllAsTouched();
      return;
    }
    this.authService.login({
      username: this.signinForm.get('username')?.value,
      password: this.signinForm.get('password')?.value,
    });
  }
  onSignUp() {
    if (this.signupForm.invalid || this.signupForm.get('acceptTerms')?.value) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.authService.login({
      username: this.signupForm.get('username')?.value,
      password: this.signupForm.get('password')?.value,
      email: this.signinForm.get('email')?.value,
    });
  }
}
