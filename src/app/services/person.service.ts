import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../models/person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) { }

  public getPersons(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>("http://localhost9999/reservation-service/persons");
  }
}
