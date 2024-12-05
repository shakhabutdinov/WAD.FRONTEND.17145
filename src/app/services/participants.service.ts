import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  CreateParticipants,
  ParticipantsType,
} from '../interfaces/Participants';

@Injectable({
  providedIn: 'root',
})
export class ParticipantsService {
  private apiurl = 'https://localhost:7100/api';
  constructor(private http: HttpClient) {}
  getItems(): Observable<ParticipantsType[]> {
    return this.http.get<ParticipantsType[]>(this.apiurl + '/Participants');
  }

  getEvents(id: number) {
    return this.http.get<ParticipantsType>(`${this.apiurl}/Participants/${id}`);
  }

  deleteParticipants(id: number) {
    return this.http.delete(`${this.apiurl}/Participants/${id}`);
  }

  createParticipants(participants: any) {
    return this.http.post<CreateParticipants>(
      `${this.apiurl}/Participants`,
      participants
    );
  }
  updateParticipants(id: number, events: any) {
    return this.http.put(`${this.apiurl}/Participants/${id}`, events);
  }
}
