import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { faker } from '@faker-js/faker';

type menuType = {
  icon: string;
  title: string;
  url: string;
};

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
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
        url: faker.image.url(),
      },
      {
        icon: 'search',
        title: 'Search',
        url: faker.image.url(),
      },
      {
        icon: 'info',
        title: 'About us',
        url: faker.image.url(),
      },
      {
        icon: 'home',
        title: faker.company.name(),
        url: faker.image.url(),
      },
      {
        icon: 'home',
        title: faker.company.name(),
        url: faker.image.url(),
      },
    ];
    this.menus = tempMenus;
  }
}
