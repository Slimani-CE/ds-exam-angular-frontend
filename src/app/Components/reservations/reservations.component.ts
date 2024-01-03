import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../models/reservation.model";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit {
  public reservations: Array<Reservation> = [];
  public focusedReservation: Reservation | undefined;
  public reservationToRemove: Reservation | undefined;

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe( {
      next: data => {
        this.reservations = data;
      },
      error: error => {
        console.error("There was an error!", error);
      }
    })
  }

  deleteReservation(reservation: Reservation) {
    this.reservationService.deleteReservation(reservation).subscribe( {
      next: data => {
        this.reservations = this.reservations.filter(r => r.id !== reservation.id);
      },
      error: error => {
        console.error("There was an error!", error);
      }
    })
  }
}
