import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { SearchInputModule } from '../search/search-input.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SearchInputModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
