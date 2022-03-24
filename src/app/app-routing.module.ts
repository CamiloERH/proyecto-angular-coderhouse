import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ListadoComponent } from './components/listado/listado.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    }, 
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: 'listado',
        component: ListadoComponent
    }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}