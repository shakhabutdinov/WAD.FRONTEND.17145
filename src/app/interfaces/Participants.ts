export interface EventManagement {
  id: number;
  eventName: string;
  date: string;
  venue: string;
  organizer: string;
}
export interface ParticipantsType {
  id: number;
  participantName: string;
  email: string;
  ticketType: string;
  eventId: number;
  events: EventManagement;
}

export interface CreateParticipants {
  participantName: string;
  email: string;
  ticketType: string;
  eventId: number;
}
