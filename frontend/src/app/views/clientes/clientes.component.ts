import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: Employee[] = [];

  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.service.getAllEmployees().subscribe((response) => {
      this.clientes = response;
    });
  }

  editarCliente(cliente: Employee) {
    console.log(cliente);
  }

  eliminarCliente(cliente: Employee) {
    console.log(cliente);
  }
}
