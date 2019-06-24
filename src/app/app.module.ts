import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModuleService } from "./services/module.service";
import { RouterService } from "./services/router.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ModuleService, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
