import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' // para interactuar con firebase

import { AppComponent } from './app.component';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentsComponent } from './proyectos-components/proyectos-components.component';
import { QuienesComponentsComponent } from './quienes-components/quienes-components.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Routes, RouterModule } from '@angular/router';// para poder usar las rutas en angular
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service'
import { LoginGuardian } from './login/login-guardian';

//crear constante para agregar las rutas
const  appRoutes:Routes = [
  /* Aca se especifica premiero la ruta y luego el componente que usa la ruta */
  {path: '', component: HomeComponentComponent, canActivate:[LoginGuardian]},
  {path: 'proyectos', component: ProyectosComponentsComponent, canActivate:[LoginGuardian]},
  {path: 'quienes-somos', component: QuienesComponentsComponent, canActivate:[LoginGuardian]},
  {path: 'contactos', component: ContactoComponentComponent, canActivate:[LoginGuardian]}, // para proteger rutas hay que agregar el LoginGuardian, configurado en login-guardian.ts
  {path: 'actualizar/:id', component: ActualizaComponentComponent}, /*para ir al indice de cada nombre agregar el /:id, tener en cuenta que en el archivo donde estan los nombres debe estar configurado en el routerLink en indice para que siga al indice, ver empleado-hijo-c.component.html en el routerLink dentro de la etiqueta <a></a> */
  {path: 'login', component: LoginComponent},
  {path:'**', component: ErrorPersonalizadoComponent} /* se le coloca dos asteriscos ** para indicar al router que esta trabajando con cualquier enlace que no sea el que esta creado, osea cualquier ruto que no exista, importante este path tiene que ser el ultimo en la lista de rutas para que funcione correctamente */
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentsComponent,
    QuienesComponentsComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //Aca para poder importar las rutas, se le coloca .forRoot y se le pasa como argumento la constante de las rutas para poder usarlas
    HttpClientModule // para interactuar con firebase
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadosService,
    DataServices,
    LoginService,
    CookieService,
    LoginGuardian // para proteger rutas especificas, ver configuracion en login-guardian.ts
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
