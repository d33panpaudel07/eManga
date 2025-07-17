import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent {
  isLogin = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Auto-detect current mode from route
    this.isLogin = this.router.url.includes('login');
  }

  toggle(toLogin: boolean) {
    this.isLogin = toLogin;
  }

  get getRegisterStyle(){
    return !this.isLogin ? 'text-white border-2 border-[var(--button-primary-bg)]' : 'text-[var(--text-muted)]';
  }
  get getLoginStyle(){
    return this.isLogin ? 'text-white border-2 border-[var(--button-primary-bg)]' : 'text-[var(--text-muted)]';
  }
}
