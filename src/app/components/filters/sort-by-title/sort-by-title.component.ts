import { Component, Input, signal } from '@angular/core';
import { Filter } from '../filter.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sort-by-title',
  templateUrl: './sort-by-title.component.html',
  styleUrls: ['./sort-by-title.component.scss']
})
export class SortByTitleComponent extends Filter {

  title_value = signal('');

  @Input() public set title(title: string) {
    this.title_value.set(title);
  };

  constructor(
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(route, router);
  }

  sortTitle(target: any) {
    const value = target.value;
    this.addQuery(value, 'title');
  }

}
