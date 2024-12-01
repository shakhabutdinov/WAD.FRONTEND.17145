import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { ParticipantsComponent } from './pages/participants/participants.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'participants',
    component: ParticipantsComponent,
  },
];
