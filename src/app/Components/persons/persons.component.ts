import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {Person} from "../../models/person.model";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit{
  public persons: Array<Person> = [];
  public focusedPerson: Person | undefined;

  constructor(private personService: PersonService) {

  }

  ngOnInit(): void {
    this.personService.getPersons().subscribe( {
      next: data => {
        this.persons = data;
      },
      error: error => {
        console.error("There was an error!", error);
      }
    })
  }
}
