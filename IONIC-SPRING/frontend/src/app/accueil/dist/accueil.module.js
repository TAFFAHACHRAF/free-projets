"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccueilPageModule = void 0;
// Importez le module HttpClientModule en premier
var http_1 = require("@angular/common/http");
// Importez ensuite les autres modules
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var accueil_page_1 = require("./accueil.page");
var accueil_routing_module_1 = require("./accueil-routing.module");
var AccueilPageModule = /** @class */ (function () {
    function AccueilPageModule() {
    }
    AccueilPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule,
                http_1.HttpClientModule,
                accueil_routing_module_1.AccueilPageRoutingModule
            ],
            declarations: [accueil_page_1.AccueilPage]
        })
    ], AccueilPageModule);
    return AccueilPageModule;
}());
exports.AccueilPageModule = AccueilPageModule;
