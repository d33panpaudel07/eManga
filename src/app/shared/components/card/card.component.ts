import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() rank: string | number | null = null;
  @Input() width: 'tiny' | 'small' | 'medium' | 'large' | 'extra-large' | 'x-large' | 'xx-large' | 'full' = 'medium';
  @Input() height: 'tiny' | 'small' | 'medium' | 'large' | 'extra-large' | 'x-large' | 'xx-large' | 'full' = 'medium';
  @Input() rating: string | null = null;
  @Input() backgroundImage: string = '';
  @Input() description: string = '';
  @Input() title: string = '';

  get getWidth(): string {
    switch (this.width) {
      case 'tiny':
        return 'w-1/12';
      case 'small':
        return 'w-1/6';
      case 'medium':
        return 'w-1/4';
      case 'large':
        return 'w-1/3';
      case 'x-large':
        return 'w-96';
      case 'xx-large':
        return 'w-96';
      case 'full':
        return 'w-full';
      default:
        return 'w-1/4';
    }
  }

  get getHeight(): string {
    switch (this.height) {
      case 'tiny':
        return 'h-24';
      case 'small':
        return 'h-36';
      case 'medium':
        return 'h-48';
      case 'large':
        return 'h-64';
      case 'x-large':
        return 'h-96';
      case 'xx-large':
        return 'h-96';
      case 'full':
        return 'h-full';
      default:
        return 'h-48';
    }
  }

}
