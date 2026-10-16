import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "../services/token-storage-service";

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

    const tokenStorage = inject(TokenStorageService)
    const token = tokenStorage.tokenStore()
    if (token !== null) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(clonedReq)
    }
    else
        return next(req)
}