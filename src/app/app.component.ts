import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NxMessageToastService
} from '@aposin/ng-aquila/message';
import { CardDataService } from './card-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aquila-christmas-card';

  constructor(
    private cardDataService: CardDataService,
    private router: Router,
    private messageToastService: NxMessageToastService
  ) {}

  showBackButton(): boolean {
    return (
      this.cardDataService.cardData && this.router.url.split('?')[0] === '/card'
    );
  }
}
