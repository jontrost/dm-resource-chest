import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
    storedRouteHandles = new Map<string, DetachedRouteHandle>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route.data.shouldReuseRoute;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.storedRouteHandles.set(route.data.key, handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.storedRouteHandles.has(route.data.key);
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.storedRouteHandles.get(route.data.key);
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}