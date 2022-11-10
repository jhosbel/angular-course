import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';

@NgModule({
  declarations: [		
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    EmpleadoComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
