import { Component } from '@angular/core';

@Component({
  selector: 'app-complete',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class CompleteComponent {
    ngOnInit() {
        window.location.href = 'https://gist.github.com/LeoATX/c5d036cfbe699a408e1354e99ab55ab8';
    }
}
