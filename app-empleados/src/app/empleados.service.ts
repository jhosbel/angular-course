import { Injectable } from '@angular/core'
import { DataServices } from './data.service';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService:DataServices){

    }

    setEmpleados(misEmpleados:Empleado[]){
      this.empleados = misEmpleados
    }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleador()
    }

    empleados:Empleado[] = []

    /* empleados:Empleado[] = [

        new Empleado("Jhosbel", "Vargas", "CEO", 4000),
        new Empleado("Gustavo", "Adolfo", "CEO", 4000),
        new Empleado("Jose", "Antonio", "CEO", 4000),
        new Empleado("Fernando", "Guerra", "Operario", 4000)
      ]; */

      agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje('Persona que se Agrega: ' + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario)
        this.empleados.push(empleado);
        this.dataService.guardarEmpleados(this.empleados)
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice]
        return empleado
      }

      actualizaEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado = this.empleados[indice]
        empleadoModificado.nombre = empleado.nombre
        empleadoModificado.apellido = empleado.apellido
        empleadoModificado.cargo = empleado.cargo
        empleadoModificado.salario = empleado.salario
        this.dataService.actualizarEmpleados(indice, empleado)
        
      }

      eliminarEmpleado(indice: number){
        this.empleados.splice(indice, 1)
        this.dataService.eliminarEmpleados(indice)
        if(this.empleados != null) this.dataService.guardarEmpleados(this.empleados)
      }
}