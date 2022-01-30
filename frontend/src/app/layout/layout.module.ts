import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';

const PUBLIC_COMPONENTS = [
  NavbarComponent,
  FooterComponent
]

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS]
})
export class LayoutModule { }
