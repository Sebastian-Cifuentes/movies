import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMovieComponent } from './card-movie.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    RouterModule
  ],
  exports: [
    CardMovieComponent
  ]
})
export class CardMovieModule { }
