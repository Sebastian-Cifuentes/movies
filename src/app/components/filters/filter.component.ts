import { ActivatedRoute, Router } from "@angular/router";

export class Filter {

    constructor(
        public route: ActivatedRoute,
        public router: Router
    ) {}

    addQuery(value: string, key: string) {
        if (value === '') return;
        const queryParams = {
          [key]: value,
        }
    
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams,
          queryParamsHandling: 'merge'
        })
    }

}