import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent {
  // @Input({required:true}) rankingCards!: CardDto[];
}
