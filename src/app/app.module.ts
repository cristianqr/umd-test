import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModuleService } from "./services/module.service";
import { RouterService } from "./services/router.service";
import { HttpClientModule } from "@angular/common/http";
import { ModuleGuard } from "./guards/module.guard";
import { HomeComponent } from "./home/home.component";
import { EmptyPageComponent } from "./empty-page/empty-page.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, EmptyPageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ModuleService, RouterService, ModuleGuard],
  bootstrap: [AppComponent],
  entryComponents: [EmptyPageComponent]
})
export class AppModule {}
