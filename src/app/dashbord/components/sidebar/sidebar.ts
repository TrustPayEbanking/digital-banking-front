import { Component } from '@angular/core';
import {Auth} from '../../../services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  constructor(private services:Auth,private router:Router) {
  }
  dropdown_departement: Boolean =false;
  changeEtatdropedwon(){
    this.dropdown_departement=!this.dropdown_departement;
  }

  protected handellogout() {
    this.router.navigateByUrl("/login")
      this.services.logout();
  }
}
