import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = 'Jhosbel'
  apellido = 'Vargas'
  edad = 30
  empresa = 'Facebook'
  prueba = 'Esto es Prueba de Getter'

  getPrueba(){
    return this.prueba
  }
  accion(value: String){}

  habilitacion = true
  userRegister = false;
  textRegister = 'No hay nadie aqui!';

  getUserRegister(){
    this.userRegister = false
  }

  showWindows(event: Event){
    //alert('Usuario Registrado!')
    //this.textRegister = "Jhosbel it's here!"
    if((<HTMLInputElement>event.target).value === "si"){
      this.textRegister = "Jhosbel it's here!"
    }else{
      this.textRegister = "No hay nadie registrado!"
    }
  }



  constructor() { }
  ngOnInit(): void {
  }
}
