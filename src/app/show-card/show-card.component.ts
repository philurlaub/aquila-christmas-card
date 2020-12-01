import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardData } from '../new-card/new-card.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss'],
})
export class ShowCardComponent implements OnInit {
  cardData: CardData;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.cardData = params as CardData;
    });
  }

  getDesignNumber(): string {
    return this.cardData ? this.cardData.design : '1';
  }
}
