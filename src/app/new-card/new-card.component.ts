import {
  Component,
  Inject,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';
import { CardDataService } from '../card-data.service';
import { WINDOW } from '../window.provider';

const BASE_PATH = '/new';

export interface CardData {
  firstName: string;
  lastName: string;
  design: string;
  headline: string;
  text: string;
}

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent implements OnInit {
  @ViewChild('template') templateRef: TemplateRef<any>;
  dialogRef: NxModalRef<any>;
  actionResult: string;

  formGroup: FormGroup;
  maxMessageCharaters = 500;

  constructor(
    private formBuilder: FormBuilder,
    public dialogService: NxDialogService,
    private router: Router,
    private cardDataService: CardDataService,
    @Inject(WINDOW) private window: Window
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.required),
      lastName: this.formBuilder.control('', Validators.required),
      design: this.formBuilder.control('1', Validators.required),
      headline: this.formBuilder.control('', Validators.required),
      text: this.formBuilder.control('', [
        Validators.required,
        Validators.maxLength(this.maxMessageCharaters),
      ]),
    });
  }
  ngOnInit(): void {
    console.log(this.router.url.split('?')[0]);
    const cardData = this.cardDataService.getCardData();
    if (cardData) { this.formGroup.patchValue(cardData); }
  }

  characterCount(): number {
    return this.formGroup.get('text').value.length;
  }

  openFromTemplate(): void {
    this.dialogService.open(this.templateRef, { ariaLabel: 'A simple modal' });
  }

  showCard(): void {
    const cardData: CardData = this.formGroup.value;
    this.cardDataService.saveCardData(cardData);
    this.router.navigate(['/card'], {
      queryParams: { ...cardData },
      skipLocationChange: false,
    });
  }

  getCardLink(): string {
    const baseHref = this.window.location.href;
    const cardLink = `${baseHref.replace(
      'new',
      'card'
    )}?${this.convertToQueryParams(this.formGroup.value)}`;
    return cardLink;
  }

  convertToQueryParams(obj: any): string {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }
}
