import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieModule } from 'src/app/components';
import { FiltersModule } from 'src/app/components/filters/filters.module';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    CardMovieModule,
    RouterModule.forChild(routes),
    FiltersModule
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesModule { }
