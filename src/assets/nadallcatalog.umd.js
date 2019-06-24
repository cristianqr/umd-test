(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('nadallcatalog', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.nadallcatalog = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AppComponent = /** @class */ (function () {
        function AppComponent() {
            this.title = 'nadall-catalog';
        }
        AppComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-root',
                        template: "<h1>CQR</h1>\n",
                        styles: [""]
                    }] }
        ];
        return AppComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        {
            path: "",
            component: AppComponent
        }
    ];
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AppComponent],
                        imports: [router.RouterModule.forChild(routes)],
                        providers: [],
                        exports: [AppComponent]
                    },] }
        ];
        return AppModule;
    }());

    exports.AppComponent = AppComponent;
    exports.AppModule = AppModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=nadallcatalog.umd.js.map
