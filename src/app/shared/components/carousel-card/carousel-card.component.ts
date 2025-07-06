import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input() backgroundUrl!: string;
  @Input() logoUrl!: string;
  @Input() year: string = '2025';
  @Input() genres!: string[];
  @Input() description!: string;

  constructor() {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
