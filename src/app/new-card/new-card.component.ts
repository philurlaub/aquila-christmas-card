import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NxDialogService, NxModalRef } from '@aposin/ng-aquila/modal';

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
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      firstName: this.formBuilder.control('Philipp Paul', Validators.required),
      lastName: this.formBuilder.control('Hans Peter', Validators.required),
      design: this.formBuilder.control('1', Validators.required),
      headline: this.formBuilder.control(
        'I wish you watt and a happy new year',
        Validators.required
      ),
      text: this.formBuilder.control(
        'Dolore et sint nostrud voluptate Lorem occaecat adipisicing laboris aute. Amet nisi aliquip occaecat quis. Amet ad ullamco aute labore reprehenderit consectetur pariatur excepteur cupidatat reprehenderit. Occaecat esse pariatur ea cillum eiusmod consectetur eu ad. Consectetur sit voluptate duis laboris duis veniam sit mollit deserunt irure ex. Velit magna elit aute laboris consectetur eiusmod nulla consequat reprehenderit nisi enim. Culpa eiusmod elit irure eu proident pariatur occaecat quis.',
        [Validators.required, Validators.maxLength(this.maxMessageCharaters)]
      ),
    });
  }
  ngOnInit(): void {}

  characterCount(): number {
    return this.formGroup.get('text').value.length;
  }

  openFromTemplate(): void {
    this.dialogService.open(this.templateRef, { ariaLabel: 'A simple modal' });
  }

  showCard(): void {
    this.router.navigate(['/card'], {
      queryParams: { ...this.formGroup.value },
      skipLocationChange: false,
    });
  }

  urlEncode(cardData: CardData): string {
    return encodeURIComponent(JSON.stringify(this.formGroup.value));
  }
}
