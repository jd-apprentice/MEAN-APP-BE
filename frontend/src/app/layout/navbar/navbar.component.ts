import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;
  userData: any | null;

  constructor() {}

  ngOnInit(): void {}

  isAuthenticated(): boolean {
    return this.userData;
  }

}
