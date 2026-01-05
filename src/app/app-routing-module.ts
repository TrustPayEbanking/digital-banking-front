import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayout} from './layouts/main-layout/main-layout';
import {Home} from './ui/home/home';
import { Contact } from './ui/contact/contact';

const routes: Routes = [
  {
    path:"",
    component:MainLayout,
    children:[
      {path:"",component:Home},
      {path:'contact',component:Contact},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
