import { Component, OnInit } from "@angular/core";
import { ModuleService } from "./services/module.service";
import { RouterService } from "./services/router.service";
import { Router, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

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

  ngOnInit() {}
}
