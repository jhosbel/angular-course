import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Usuario';
  message = ''
  register = false
  nombre: string = ''
  apellido: string = ''
  cargo: string = ""
  entradas: any[];

  constructor() {
    this.entradas = [
      { titulo: "Python cada dia mas presente" },
      { titulo: "Java presente desde hace mas de 20 años" },
      { titulo: "JavaScript cada ves mas funcional" },
      { titulo: "Kotiln potencia para tus Apps" },
      { titulo: "Donde quedo pascal?" },
    ]
  }

  userRegister() {
    this.register = true
    this.message = "Usuario registrado con exito"
  }
}
