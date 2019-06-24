import { Component, OnInit } from "@angular/core";
import { ModuleService } from "./services/module.service";
import { RouterService } from "./services/router.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "nadall-erp";
  constructor(
    private moduleService: ModuleService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.registerRoute();
  }

  private registerRoute() {
    const moduleUrl = "/nadall-catalog-app.umd.min.js";
    const moduleName = "NadallCatalogAppModule";
    this.moduleService.loadModule(moduleUrl, moduleName).subscribe(exports => {
      this.routerService.createAndRegisterRoute("catalog", moduleName, exports);
    });
  }
}
