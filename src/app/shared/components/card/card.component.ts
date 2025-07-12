import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDto} from "../../models/card.model";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank: string | number | null = null;
  @Input() rating: string | null = null;
  @Input() backgroundImage: string = '';
  @Input() description: string = '';
  @Input() title: string = '';

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
