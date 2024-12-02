import { Component, inject } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { EventsType } from '../../interfaces/EventType';

@Component({
  selector: 'app-events-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './events-detail-view.component.html',
  styleUrl: './events-detail-view.component.scss',
})
export class EventsDetailViewComponent {
  eventsService = inject(EventsService);
  eventsDetail: EventsType = {
    id: 0,
    eventName: '',
    venue: '',
    organizer: '',
    date: new Date(),
  };
  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.eventsService.getEvents(id).subscribe((item: EventsType) => {
      this.eventsDetail = item;
    });
  }
}
