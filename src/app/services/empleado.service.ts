import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/Empleado';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  URL_API = 'http://localhost:3000/api/empleados';
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado = {
    nombre: '',
    cargo: '',
    departamento: '',
    sueldo: 0
  }
  constructor(private http: HttpClient) { }
  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }
  createEmpleado(empleado: Empleado) {
    return this.http.post(this.URL_API, empleado);
  }
}
