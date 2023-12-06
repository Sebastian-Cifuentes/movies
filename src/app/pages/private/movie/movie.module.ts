import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';


const routes: Routes = [
  {
    path: '',
    component: MovieComponent
  }
];

@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModalModule,
    YouTubePlayerModule
  ],
  exports: [
    RouterModule
  ]
})

export class MovieModule { }
