import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { OrnamentComponent } from './ornament/ornament.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'subscribe', 
        component: SubscribeComponent
    }, 
    {
        path: 'ornament', 
        component: OrnamentComponent
    }
];