import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardData } from '../new-card/new-card.component';
import { Location } from '@angular/common';
import { NxMessageToastService } from '@aposin/ng-aquila/message';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  cardData: CardData;

  constructor(private route: ActivatedRoute, private messageToastService: NxMessageToastService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.cardData = params as CardData;
    });
    this.messageToastService.open('Hover over the card!', { duration: 1000 });
  }

  getDesignNumber(): string {
    return this.cardData.design ? this.cardData.design : '1';
  }
}
