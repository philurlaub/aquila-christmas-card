import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxDocumentationIconModule } from '@aposin/ng-aquila/documentation-icons';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardComponent } from './new-card/new-card.component';
import { ShowCardComponent } from './show-card/show-card.component';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxListComponent, NxListModule } from '@aposin/ng-aquila/list';
import { WINDOW_PROVIDERS } from './window.provider';
import { NxMessageModule, NxMessageToastService } from '@aposin/ng-aquila/message';

@NgModule({
  declarations: [AppComponent, NewCardComponent, ShowCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxHeaderModule,
    NxFooterModule,
    NxButtonModule,
    NxLinkModule,
    NxGridModule,
    NxCardModule,
    NxIconModule,
    NxDocumentationIconModule,
    NxHeadlineModule,
    NxFormfieldModule,
    NxPopoverModule,
    NxDropdownModule,
    ReactiveFormsModule,
    NxInputModule,
    NxExpertModule,
    NxPopoverModule,
    BrowserModule,
    BrowserAnimationsModule,
    NxModalModule,
    NxListModule,
    NxMessageModule,
  ],
  providers: [WINDOW_PROVIDERS, NxMessageToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
