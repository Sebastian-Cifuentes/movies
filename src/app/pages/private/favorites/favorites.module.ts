import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieModule } from '../../../components/card-movie/card-movie.module';


const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardMovieModule
  ],
  exports: [
    RouterModule
  ]
})
export class FavoritesModule { }
