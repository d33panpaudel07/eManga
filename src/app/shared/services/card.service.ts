import { Injectable } from '@angular/core';
import {CardDto, CarouselCardDto} from "../models/card.model";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCardDataForCarousel():CarouselCardDto{
    return {
      backgroundUrl : 'https://w.wallhaven.cc/full/57/wallhaven-571998.png',
      logoUrl : 'assets/images/logos/Cyberpunk-2077-Logo.png',
      description : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      genres : ['Cry', 'Once', 'And', 'Again'],
      year : '2025',
    }
  }

  getCardData():CardDto{
    return {
      rank:7,
      backgroundImage:'https://i.pinimg.com/736x/85/83/9e/85839e617a7be7dc04a85863fea4d0bf.jpg',
      description:'Killua here',
      rating: 4,
      title:'HxH'
    }
  }
}
