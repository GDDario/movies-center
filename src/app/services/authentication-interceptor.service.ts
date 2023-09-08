import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({ providedIn: "root" })
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: string = this.tokenService.getApiReadAccesToken();

    if (token !== null) {
      const authenticatedRequest  = req.clone({ setHeaders: { "Authorization": `Bearer ${token}` } });
      return next.handle(authenticatedRequest);
    }

    return next.handle(req);
  }

}
