import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {CardComponent} from "../../shared/components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
