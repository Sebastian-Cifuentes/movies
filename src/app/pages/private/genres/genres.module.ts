import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresComponent } from './genres.component';
import { RouterModule, Routes } from '@angular/router';
import { CardMovieModule } from 'src/app/components';
import { FiltersModule } from 'src/app/components/filters/filters.module';

const routes: Routes = [
  {
    path: '',
    component: GenresComponent
  }
];

@NgModule({
  declarations: [
    GenresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardMovieModule,
    FiltersModule
  ],
  exports: [
    RouterModule
  ]
})
export class GenresModule { }
