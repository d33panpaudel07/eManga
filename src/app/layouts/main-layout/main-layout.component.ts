import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {NavBarComponent} from "../../shared/components/nav-bar/nav-bar.component";
import {SideBarComponent} from "../../shared/components/side-bar/side-bar.component";
import {SidebarService} from "../../shared/services/sidebar.service";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavBarComponent, SideBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  isSidebarOpen:boolean = false;

  constructor(private sidebarService:SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarState$.subscribe((state:boolean) => this.isSidebarOpen = state);
  }

  toggleSidebar(){
    this.sidebarService.toggleSidebar();
  }

  hideSidebar(){
    this.sidebarService.setSidebar(false);
  }

  getSidebarState(){
    return this.sidebarService.sidebarState
  }
}
