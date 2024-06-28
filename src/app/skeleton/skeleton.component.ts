import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class SkeletonComponent {
    ngOnInit() {
        window.location.href = 'https://gist.github.com/LeoATX/11fdae453d159a9dbf5decdb9a6030fb';
    }
}
