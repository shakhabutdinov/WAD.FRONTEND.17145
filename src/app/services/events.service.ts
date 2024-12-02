import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreateEvents, EventsType } from '../interfaces/EventType';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private apiurl = 'https://localhost:7175/api';
  constructor(private http: HttpClient) {}

  getItems(): Observable<EventsType[]> {
    return this.http.get<EventsType[]>(this.apiurl + '/Events');
  }

  getEvents(id: number) {
    return this.http.get<EventsType>(`${this.apiurl}/Events/${id}`);
  }

  deleteEvents(id: number) {
    return this.http.delete(`${this.apiurl}/Events/${id}`);
  }

  createEvents(participants: any) {
    return this.http.post<CreateEvents>(`${this.apiurl}/Events`, participants);
  }
  updateEvents(id: number, events: any) {
    return this.http.put(`${this.apiurl}/Events/${id}`, events);
  }
}
