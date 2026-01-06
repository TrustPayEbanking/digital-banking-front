import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Auth} from '../services/auth';
import {Injectable} from '@angular/core';
@Injectable({ providedIn: 'root' })
export class authenticationGuard implements CanActivate{
  constructor(private authService :Auth,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.authService.isAuthenticated==true){
      return true
    }
    else{
      this.router.navigateByUrl("/login")

      return false
    }
  }
}
