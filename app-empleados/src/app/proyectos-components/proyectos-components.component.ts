import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-components',
  templateUrl: './proyectos-components.component.html',
  styleUrls: ['./proyectos-components.component.css']
})
export class ProyectosComponentsComponent implements OnInit {

  /* para usar las rutas hay que agregar al constructos la variable router de tipo Router, tambien hay que importarlo desde angular/router */

  constructor(private router:Router, private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) { }

  empleados: Empleado[] = []

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverHome(){
    this.router.navigate([""]) //la manera de enlazar la ruta en a traves del metodo navigate y luego agregar el nombre de la ruta que se coloco en el html, en el href
  }

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario)
    this.empleadosService.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate([""])
  }

  cuadroNombre: string = ""
  cuadroApellido: string = ""
  cuadroCargo: string = ""
  cuadroSalario: number = 0

}
