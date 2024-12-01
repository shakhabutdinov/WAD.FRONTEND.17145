import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../components/table/table.component';
import { Component } from '@angular/core';
import { EventsType } from '../../interfaces/EventType';
import { EventsService } from '../../services/events.service';
import { TableColumnTypes } from '../../interfaces/TableColumnTypes';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  imports: [HttpClientModule, TableComponent],
})
export class EventsComponent {
  eventItems: EventsType[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getItems().subscribe((item) => {
      this.eventItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    { label: 'EventName', key: 'eventName' },
    { label: 'Date', key: 'date' },
    { label: 'Venue', key: 'venue' },
    { label: 'Organizer', key: 'organizer' },
  ];
}
