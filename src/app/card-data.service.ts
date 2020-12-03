import { Injectable } from '@angular/core';
import { CardData } from './new-card/new-card.component';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  cardData: CardData;

  constructor() { }

  saveCardData(cardData: CardData): void {
    this.cardData = cardData;
  }

  getCardData(): CardData {
    return this.cardData;
  }
}
