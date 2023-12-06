import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filter } from '../filter.component';

@Component({
  selector: 'app-select-genre',
  templateUrl: './select-genre.component.html',
  styleUrls: ['./select-genre.component.scss']
})
export class SelectGenreComponent extends Filter {

  genre_value = signal('');

  @Input() public set genre(genre: string) {
    this.genre_value.set(genre);
  };

  constructor(
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(route, router);
  }

  sortGenre(target: any) {
    const value = target.value;
    this.addQuery(value, 'genre');
  }

}
