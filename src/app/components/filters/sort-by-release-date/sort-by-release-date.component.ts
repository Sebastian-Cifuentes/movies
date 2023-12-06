import { Component, Input, signal } from '@angular/core';
import { Filter } from '../filter.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sort-by-release-date',
  templateUrl: './sort-by-release-date.component.html',
  styleUrls: ['./sort-by-release-date.component.scss']
})
export class SortByReleaseDateComponent extends Filter {

  release_date_value = signal('');

  @Input() public set releaseDate(releaseDate: string) {
    this.release_date_value.set(releaseDate);
  };

  constructor(
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(route, router);
  }

  sortReleaseDate(target: any) {
    const value = target.value;
    this.addQuery(value, 'releaseDate');
  }

}
