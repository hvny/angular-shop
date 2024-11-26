import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { EventsComponent } from './events/events.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'profile', component: ProfileComponent},
    {path: 'items', component: ItemsComponent},
    {path: 'delivery', component: DeliveryComponent},
    {path: 'events', component: EventsComponent},
    { path: '**', redirectTo: '' }
];
