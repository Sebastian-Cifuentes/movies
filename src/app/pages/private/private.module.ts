import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { NavbarModule, FooterModule} from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'movie/:id',
        loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
      },
      {
        path: 'genres',
        loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },
      {
        path: '**',
        redirectTo: 'movies'
      }
    ]
  }
];

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    FooterModule
  ]
})
export class PrivateModule { }
