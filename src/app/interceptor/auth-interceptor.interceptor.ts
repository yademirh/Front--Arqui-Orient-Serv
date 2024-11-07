import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Pase por el INTERCEPTOR");
  
  const token = localStorage.getItem("token");
  if(req.url.includes("/api")){  //para que no aplique interceptor al login
    if(token){
      const petitionClone = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(petitionClone).pipe(catchError(handleError));
    }
  }

  return next(req).pipe(catchError(handleError));
};


const handleError = (error: HttpErrorResponse) => {
  console.log("Generaste un error");
  console.log(error);
  
  return throwError(()=>"HOLA, error")
}
