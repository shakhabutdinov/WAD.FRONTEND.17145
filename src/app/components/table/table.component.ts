import { Component, Input, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { EventsService } from '../../services/events.service';
import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsType } from '../../interfaces/Participants';
import { EventsType } from '../../interfaces/EventType';
import { TableColumnTypes } from '../../interfaces/TableColumnTypes';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  imports: [MatTableModule],
})
export class TableComponent {
  router = inject(Router);
  location = inject(Location);
  eventService = inject(EventsService);
  participantsService = inject(ParticipantsService);

  @Input()
  dataWarehouse: (ParticipantsType | EventsType)[] = [];

  @Input()
  displayedColumns: TableColumnTypes[] = [];

  displayedColumnsStr: string[] = [];

  ngOnChanges() {
    this.displayedColumnsStr = this.displayedColumns.map((item) => item.key);
    this.displayedColumnsStr.unshift('No');
    this.displayedColumnsStr.push('Actions');
  }

  EditClicked(id: number) {
    const route = this.location.path().slice(1);
    this.router.navigateByUrl(`create-${route}?${route}Id=${id}`);
  }

  DetailsClicked(id: number) {
    this.router.navigateByUrl(this.location.path() + '/' + id);
  }

  DeleteClicked(id: number) {
    if (this.location.path() === '/events') {
      this.eventService.deleteEvents(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }

    if (this.location.path() === '/participants') {
      this.participantsService.deleteParticipants(id).subscribe((_) => {
        this.dataWarehouse = this.dataWarehouse.filter((t) => t.id !== id);
      });
    }
  }
}
