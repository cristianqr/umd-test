import { Router, Route } from "@angular/router";
import { Injectable, Compiler } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RouterService {
  existingRoutes: BehaviorSubject<Route[]>;

  constructor(private router: Router, private compiler: Compiler) {
    this.existingRoutes = new BehaviorSubject<Route[]>(this.routes);
  }

  private get routes(): Route[] {
    var routesToReturn = this.router.config;
    return routesToReturn.filter(x => x.path !== "");
  }

  createAndRegisterRoute(modulePath, moduleName, exports: any) {
    let route: Route = {
      path: modulePath,
      loadChildren: () => exports[`${moduleName}`]
    };

    this.registerRoute(route);
  }

  routeIsRegistered(path: string) {
    return this.router.config.filter(r => r.path === path).length > 0;
  }

  registerRoute(route: Route) {
    if (this.routeIsRegistered(route.path)) {
      this.unRegisterRoute(route.path);
    }

    this.router.config.push(route);
    this.updateRouteConfig(this.router.config);
  }

  unRegisterRoute(path: string) {
    this.updateRouteConfig(
      this.router.config.filter(route => route.path !== path)
    );
  }

  private updateRouteConfig(config) {
    this.router.resetConfig(config);
    this.existingRoutes.next(this.routes);
  }
}
