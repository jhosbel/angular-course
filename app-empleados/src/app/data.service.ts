import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core'
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient, private loginService:LoginService){}

    cargarEmpleador(){
        const token = this.loginService.getIdToken()
        return this.httpClient.get('https://mis-clientes-191bc-default-rtdb.firebaseio.com/datos.json?auth=' + token)
    }

    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://mis-clientes-191bc-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            res => console.log('Se han guardado los empleados: ' + res),
            err => console.log('Error: ' + err)
        );
    }

    actualizarEmpleados(indice:number, empleado:Empleado){
        let url = 'https://mis-clientes-191bc-default-rtdb.firebaseio.com/datos/' + indice + '.json'
        this.httpClient.put(url, empleado).subscribe(
            res => console.log('Se han actualizado los datos: ' + res),
            err => console.log('Error: ' + err)
        );
    }

    eliminarEmpleados(indice:number){
        let url = 'https://mis-clientes-191bc-default-rtdb.firebaseio.com/datos/' + indice + '.json'
        this.httpClient.delete(url).subscribe(
            res => console.log('Se eliminado el usuario correctamente: ' + res),
            err => console.log('Error: ' + err)
        );
    }
}