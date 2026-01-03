import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayout} from './layouts/main-layout/main-layout';
import {Home} from './ui/home/home';

const routes: Routes = [
  {
    path:"",
    component:MainLayout,
    children:[
      {path:"",component:Home}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
