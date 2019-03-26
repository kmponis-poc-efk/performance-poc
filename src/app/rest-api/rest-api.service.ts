import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RestApiService {
    params: any;

    constructor(private router: Router) { }

    navigateTo(url: string, params: any): void {
        this.router.navigate([url]);
        this.params = params;
    }
}
