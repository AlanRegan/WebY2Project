 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
import { CreateAdvertComponent } from './create-advert/create-advert.component';

 const routes: Routes = [
     { path: 'adverts', component: CreateAdvertComponent}
 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ CreateAdvertComponent ]