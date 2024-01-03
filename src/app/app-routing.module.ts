import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourcesComponent} from "./Components/resources/resources.component";
import {ReservationsComponent} from "./Components/reservations/reservations.component";
import {AuthGuard} from "./guards/auth.guard";
import {PersonsComponent} from "./Components/persons/persons.component";

const routes: Routes = [
  {path : "resources", component: ResourcesComponent,
    canActivate: [AuthGuard], data: {roles: []}
  },
  {path: "reservations", component: ReservationsComponent,
    canActivate: [AuthGuard], data: {roles: []}
  },
  {path: "persons", component: PersonsComponent,
    canActivate: [AuthGuard], data: {roles: []}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
