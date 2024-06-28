import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { CompleteComponent } from './complete/complete.component';

export const routes: Routes = [
    {
        path: '',
        component: SkeletonComponent
    },
    {
        path: 'complete', 
        component: CompleteComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
