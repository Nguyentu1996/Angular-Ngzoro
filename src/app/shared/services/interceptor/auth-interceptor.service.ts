import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { StoragesService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private storageService :StoragesService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.storageService.getToken();
    if(authToken){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      });
      return next.handle(authReq);
    }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
   
    const modified = req.clone({ 
      // setHeaders: { 'Content-Type': 'application/json' }
    });
    // send cloned request with header to the next handler.
    return next.handle(modified);
  }
}
