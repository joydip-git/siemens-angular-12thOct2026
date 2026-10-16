import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "../../shared/services/token-storage-service";

// class G implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//         throw new Error("Method not implemented.");
//     }

// }
export const ProductAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const router = inject(Router)
    const tokenStorageService = inject(TokenStorageService)
    const isLogged = tokenStorageService.isLoggedIn()

    if (!isLogged) {
        router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url }
        })
        return false
    } else
        return true
}