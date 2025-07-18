import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SidebarService} from "../../services/sidebar.service";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isLogin = false;
  isRegister = false;

  constructor(public router: Router, protected sidebarService:SidebarService) {}

  getNavButtonClass(isActive: boolean): string {
    const baseClass = 'flex items-center gap-1 px-4 py-2 rounded-md transition-all duration-300 ease-in-out';
    const activeClass = 'bg-button-primary-hover text-text-primary font-semibold';
    const hoverClass = 'hover:bg-button-primary-bg hover:text-white';

    return `${baseClass} ${isActive ? activeClass : ''} ${hoverClass}`;
  }

  handleRegister(){
    this.router.navigate(['/register']).then(r => console.log('Navigation to register successful'));
  }
  handleLogin(){
    this.router.navigate(['/login']).then(r => console.log('Navigation to login successful'));
  }
}
