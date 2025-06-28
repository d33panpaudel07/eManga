import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
  private readonly darkClass = 'dark-theme';

  constructor() {
    // Load theme from localStorage or set default
    const isDark = localStorage.getItem('theme') === 'dark';
    this.setDarkMode(isDark);
  }

  setDarkMode(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add(this.darkClass);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(this.darkClass);
      localStorage.setItem('theme', 'light');
    }
  }

  toggleTheme(): void {
    const isDark = document.body.classList.contains(this.darkClass);
    this.setDarkMode(!isDark);
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.darkClass);
  }
}
