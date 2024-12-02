import { Component, inject } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsType } from '../../interfaces/Participants';

@Component({
  selector: 'app-participants-detail-view',
  standalone: true,
  imports: [],
  templateUrl: './participants-detail-view.component.html',
  styleUrl: './participants-detail-view.component.scss',
})
export class ParticipantsDetailViewComponent {
  participantsService = inject(ParticipantsService);
  participantsDetail: ParticipantsType = {
    id: 0,
    participantName: '',
    email: '',
    ticketType: '',
    eventId: 0,
    events: {
      id: 0,
      eventName: '',
      date: '',
      venue: '',
      organizer: '',
    },
  };

  route = inject(ActivatedRoute);
  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.participantsService
      .getEvents(id)
      .subscribe((item: ParticipantsType) => {
        this.participantsDetail = item;
      });
  }
}
