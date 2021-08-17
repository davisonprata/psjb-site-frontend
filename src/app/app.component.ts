import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'psjb-site-frontend';

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        //window.location.reload();
    }
}
