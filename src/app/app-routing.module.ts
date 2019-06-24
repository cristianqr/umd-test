import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  Router,
  NavigationEnd,
  NavigationStart
} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { filter } from "rxjs/operators";
import { ModuleService } from "./services/module.service";
import { RouterService } from "./services/router.service";
import { EmptyPageComponent } from "./empty-page/empty-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private moduleService: ModuleService,
    private routerService: RouterService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.registerRoute(event.url);
        this.dynamicRoute(event.url);
      });
  }

  private registerRoute(url: string) {
    const moduleUrl = "/nadall-catalog-app.umd.min.js";
    const moduleName = "NadallCatalogAppModule";
    if (this.routerService.routeIsRegistered("catalog")) {
      return;
    }

    console.log("notRegistered", url);
    this.moduleService.loadModule(moduleUrl, moduleName).subscribe(exports => {
      this.routerService.createAndRegisterRoute("catalog", moduleName, exports);
      this.router.navigate([url]);
    });
  }

  private dynamicRoute(path: string) {
    if (path === "/") {
      return;
    }
    const pathArray = path.split("/");
    const config = this.router.config;
    config.push({
      path: pathArray[1],
      children: [
        {
          path: pathArray[2],
          component: EmptyPageComponent
        }
      ]
    });
    this.router.resetConfig(config);
  }
}
