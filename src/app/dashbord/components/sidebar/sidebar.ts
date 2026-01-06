import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  dropdown_departement: Boolean =false;
  changeEtatdropedwon(){
    this.dropdown_departement=!this.dropdown_departement;
  }

}
