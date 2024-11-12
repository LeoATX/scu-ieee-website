import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-ornament',
    standalone: true,
    imports: [],
    templateUrl: './ornament.component.html',
    styleUrl: './ornament.component.css'
})
export class OrnamentComponent {
    constructor(private location: Location) {
        window.location.href = 'https://forms.gle/CGoSCDLgBWuwS2Zc9';
    }
}
