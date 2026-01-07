import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  formLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authServices: Auth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  handleLogin(): void {
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;

    this.authServices.login(username, password).subscribe({
      next: (value) => {
        this.authServices.loadProfile(value);
        this.router.navigate(['/dashbord']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
