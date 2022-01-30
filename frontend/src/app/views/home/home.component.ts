import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  MODULES = [
    { route: "clientes", name: "Clientes", icon: "fas fa-user-friends fa-4x", disabled: false },
    { route: "servicios", name: "Servicios", icon: "fas fa-eye fa-4x", disabled: true },
  ]

  constructor() {}

  ngOnInit() {}

}
