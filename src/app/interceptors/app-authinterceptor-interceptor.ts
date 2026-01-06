import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import {Auth} from '../services/auth';

export const appAuthinterceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(Auth);
  const token = authService.accessToken;

  if (req.url.includes('/login') || req.url.includes('/register')) {
    return next(req);
  }

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
