import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resource} from "../models/resource.model";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) { }

  public getResources(): Observable<Array<Resource>> {
    return this.http.get<Array<Resource>>("http://localhost:9999/reservation-service/resources");
  }
}
