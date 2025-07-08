import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {document} from "postcss";
import {HomeComponent} from "./features/home/home.component";
import {RouterOutlet} from "@angular/router";
import {NavBarComponent} from "./shared/components/nav-bar/nav-bar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eManga';
}
