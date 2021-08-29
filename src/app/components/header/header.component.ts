import { Component } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public hamburgerMenuActive: boolean = false;

    constructor(router: Router) {
        router.events
            .pipe(filter(event => event instanceof NavigationStart))
            .subscribe(() => this.hamburgerMenuActive = false);
    }

    public showHamburgerMenu = () => {
        this.hamburgerMenuActive = !this.hamburgerMenuActive;
    }
}
