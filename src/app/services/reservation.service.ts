import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Reservation} from "../models/reservation.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>("http://localhost:8085/reservations");
  }

  public deleteReservation(reservation: Reservation): Observable<any> {
    return this.http.delete("http://localhost:8085/reservations/" + reservation.id);
  }
}
