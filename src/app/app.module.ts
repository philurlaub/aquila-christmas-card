import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NxIconModule} from '@aposin/ng-aquila/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NxHeaderModule,
    NxFooterModule,
    NxButtonModule,
    NxLinkModule,
    NxGridModule,
    NxCardModule,
    NxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
