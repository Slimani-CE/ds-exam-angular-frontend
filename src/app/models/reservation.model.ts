import {Resource} from "./resource.model";
import {Person} from "./person.model";

export interface Reservation {
  id: string;
  name: string;
  context: string;
  createdAt: Date;
  duration: number;
  resource: Resource;
  madeBy: Person
}
