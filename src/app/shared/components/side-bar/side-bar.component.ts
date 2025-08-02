import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';
import {RouterLink, ɵEmptyOutletComponent} from "@angular/router";

type menuType = {
  icon: string;
  title: string;
  url: string;
};

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ɵEmptyOutletComponent, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnChanges, OnInit {
  // @Input({ required: true }) menuList: menuType[] = [];
  @Input({ required: true }) isSidebarOpen!: boolean;

  // TODO:set data for property below
  menus: menuType[] = [];

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.fillMenus();
  }

  fillMenus() {
    const tempMenus: menuType[] = [
      {
        icon: 'home',
        title: 'Home',
        url: '/home',
      },
      {
        icon: 'search',
        title: 'Search',
        url: '/browse',
      },
      {
        icon: 'info',
        title: 'About us',
        url: faker.image.url(),
      },
    ];
    this.menus = tempMenus;
  }
}
