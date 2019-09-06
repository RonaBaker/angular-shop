import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean ;
}

@Injectable()
export class allowNavigateAwayGuard implements CanDeactivate<CanComponentDeactivate> {
    constructor(private router: Router) {}
    canDeactivate(component: CanComponentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
                    return component.canDeactivate();
                  }
}