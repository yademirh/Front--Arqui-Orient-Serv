import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const protectionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  console.log("Pase por el WARD");
  let token = localStorage.getItem("token");
  console.log("token");
  if(token){
    return true;
  }

  return router.createUrlTree([""]);
};
