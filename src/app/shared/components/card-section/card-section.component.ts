import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnChanges{
  // @Input({required:true}) rankingCards!: CardDto[];
  @Input({required:true}) sectionTitle!: string;
  @Input({required:true}) sectionContent!: {title:string, description:string, backgroundImage:string, rank?:string | number}[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
