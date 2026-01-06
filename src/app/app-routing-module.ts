import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';
import { Home } from './ui/home/home';
import { Contact } from './ui/contact/contact';

import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './ui/login/login';

import { AuthDashbord } from './layouts/auth-dashbord/auth-dashbord';
import { Index } from './dashbord/ui/index';

const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", component: Home },
      { path: "contact", component: Contact }
    ]
  },
  {
    path: "login",
    component: AuthLayout,
    children: [
      { path: "", component: Login }
    ]
  },
  {
    path: "dashbord",
    component: AuthDashbord,
    children: [
      { path: "", component: Index },

      // ✅ Customers en standalone
      {
        path: "customers",
        loadComponent: () =>
          import('./dashbord/ui/customers/customers')
            .then(m => m.Customers)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
