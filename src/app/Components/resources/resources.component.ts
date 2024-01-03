import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../../services/resource.service";
import {Resource} from "../../models/resource.model";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})

export class ResourcesComponent implements OnInit {
  public resources: Array<Resource> = [];

  constructor(private resourceService: ResourceService) {

  }

  ngOnInit(): void {
    this.resourceService.getResources().subscribe( {
      next: data => {
        this.resources = data;
      },
      error: error => {
        console.error("There was an error!", error);
      }
    })
  }
}
