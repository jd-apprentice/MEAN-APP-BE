import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseUrl: string = 'http://localhost:4000/api/employees';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl)
  }

  updateEmployee(): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl, "/:id")
  }

  // deleteEmployee(): Observable<Employee> {
  //   return this.http.delete<Employee>(this.baseUrl, "/:id")
  // }
  
}
