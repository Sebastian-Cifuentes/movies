import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  @ViewChild('input') input: any;

  constructor(
    private router: Router
  ) {
  }

  search(event: any) {
    if (event.key === 'Enter') {
      const value = event.target.value;
      if (value === '') return;
      const queryParams = {
        search: value
      }
  
      this.router.navigate(['/search'], {
        queryParams,
        queryParamsHandling: 'merge'
      })
      this.input.nativeElement.value = '';
    }
  }

}
