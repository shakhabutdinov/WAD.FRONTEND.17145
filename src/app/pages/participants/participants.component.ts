import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from '../../components/table/table.component';
import { ParticipantsService } from '../../services/participants.service';
import { ParticipantsType } from '../../interfaces/Participants';
import { TableColumnTypes } from '../../interfaces/TableColumnTypes';

@Component({
  selector: 'app-participants',
  standalone: true,
  templateUrl: './participants.component.html',
  styleUrl: './participants.component.scss',
  imports: [TableComponent],
})
export class ParticipantsComponent {
  participantsItems: ParticipantsType[] = [];

  constructor(private participantService: ParticipantsService) {}

  ngOnInit(): void {
    this.participantService.getItems().subscribe((item) => {
      this.participantsItems = item;
    });
  }

  displayedColumns: TableColumnTypes[] = [
    {
      label: 'Participants',
      key: 'participantName',
    },
    {
      label: 'Email',
      key: 'email',
    },
    {
      label: 'Ticket Type',
      key: 'ticketType',
    },
  ];
}
