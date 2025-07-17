import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank?: string | number;
  @Input() rating: number = 4;
  @Input() tags: string[]= ['horror', 'comedy']
  @Input({required:true}) backgroundImage: string = '';
  @Input({required:true}) description: string = '';
  @Input({required:true}) title: string = '';
}
