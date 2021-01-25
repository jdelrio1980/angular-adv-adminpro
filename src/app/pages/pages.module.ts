import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
/*Para poder usar el <router-outlet></router-outlet> en la plantilla se podria de dos formas
1. Importando AppRoutingModule que ya declaramo en app.module.ts y colocarlos en los imports
2.Importar la clase RouterModule y colocarlo en los imports*/

// import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';


import { DashboradComponent } from './dashborad/dashborad.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboradComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  exports:[
    DashboradComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
    // AppRoutingModule
  ]
})
export class PagesModule { }
