import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByTitleComponent } from './sort-by-title/sort-by-title.component';
import { SortByReleaseDateComponent } from './sort-by-release-date/sort-by-release-date.component';
import { SelectGenreComponent } from './select-genre/select-genre.component';



@NgModule({
  declarations: [
    SortByTitleComponent,
    SortByReleaseDateComponent,
    SelectGenreComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortByTitleComponent,
    SortByReleaseDateComponent,
    SelectGenreComponent
  ]
})
export class FiltersModule { }
