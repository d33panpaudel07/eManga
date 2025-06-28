import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {document} from "postcss";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eManga';
}
