import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  num1:string = '0'
  num2:string = '0'
  result:number = 0

  sumar():void{
    this.result = parseInt(this.num1) + parseInt(this.num2)
  }
  restar():void{
    this.result = parseInt(this.num1) - parseInt(this.num2)
  }
}
