import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCardComponent } from './new-card/new-card.component';
import { ShowCardComponent } from './show-card/show-card.component';

const routes: Routes = [
  {path: '', redirectTo: '/new', pathMatch: 'full' },
  {path: 'card', component: ShowCardComponent},
  {path: 'new', component: NewCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
