import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    navDisplay: boolean = false;
    hamburgerSrc: string = '/assets/icons/hamburger.svg';

    toggleNavbar() {
        if (this.navDisplay == false) {
            this.navDisplay = true;
            this.hamburgerSrc = '/assets/icons/close.svg';
        }
        else {
            this.navDisplay = false;
            this.hamburgerSrc = '/assets/icons/hamburger.svg';
        }
        console.log(this.navDisplay);
    }
}
