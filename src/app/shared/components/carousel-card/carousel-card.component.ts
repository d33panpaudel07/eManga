import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit,OnChanges {
  @Input() backgroundUrl!: string;
  @Input() logoUrl!: string;
  @Input() year: string = '2025';
  @Input() genres!: string[];
  @Input() description!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CarouselCardComponent - Inputs changed:', changes);
  }
}
