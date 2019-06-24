import { Injectable, Compiler } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Needed for the new modules
import * as AngularCore from "@angular/core";
import * as AngularCommon from "@angular/common";
import * as AngularRouter from "@angular/router";
import * as AngularHttp from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ModuleService {
  source = `http://172.29.212.167:8080`;

  constructor(private compiler: Compiler, private http: HttpClient) {
    console.log(compiler);
  }

  loadModule(moduleUrl, moduleName): Observable<any> {
    let url = this.source + moduleUrl;
    return this.http.get(url, { responseType: "text" }).pipe(
      map(source => {
        const exports = {}; // this will hold module exports
        const modules = {
          // this is the list of modules accessible by plugins
          "@angular/core": AngularCore,
          "@angular/common": AngularCommon,
          "@angular/router": AngularRouter,
          "@angular/common/http": AngularHttp
        };

        // shim 'require' and eval
        const require: any = module => modules[module];
        eval(source);

        // Need to check if there is another solution for eval as this is described as 'Evil'

        this.compiler.compileModuleAndAllComponentsSync(
          exports[`${moduleName}`]
        );
        console.log("aaaaaa", exports); // disabled as this object is cleared anyway
        return exports;
      })
    );
  }
}
