import { NgModule } from '@angular/core';
import { ClientesComponent } from './clientes.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesRoutingModule } from './clientes-routing-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ClientesRoutingModule
  ],
  declarations: [ClientesComponent],
  exports: [ClientesComponent]
})
export class ClientesModule { }
