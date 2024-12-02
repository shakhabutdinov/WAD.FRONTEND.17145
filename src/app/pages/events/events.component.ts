import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { TableComponent } from '../../components/table/table.component';
import { EventsType } from '../../interfaces/EventType';
import { TableColumnTypes } from '../../interfaces/TableColumnTypes';

@Component({
  selector: 'app-events',
  standalone: true,
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  imports: [TableComponent],
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
    {
      label: 'EventName',
      key: 'eventName',
    },
    {
      label: 'Date',
      key: 'date',
    },
    {
      label: 'Venue',
      key: 'venue',
    },
    {
      label: 'Organizer',
      key: 'organizer',
    },
  ];
}
