import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { EventsComponent } from './pages/events/events.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'delivery', component: DeliveryComponent},
    {path: 'events', component: EventsComponent},
    { path: '**', redirectTo: 'home' }
];
