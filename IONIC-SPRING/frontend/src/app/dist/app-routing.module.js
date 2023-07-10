"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home/home.module'); }).then(function (m) { return m.HomePageModule; }); }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'name',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./name/name.module'); }).then(function (m) { return m.NamePageModule; }); }
    },
    {
        path: 'gender',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./gender/gender.module'); }).then(function (m) { return m.GenderPageModule; }); }
    },
    {
        path: 'password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./password/password.module'); }).then(function (m) { return m.PasswordPageModule; }); }
    },
    {
        path: 'email',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./email/email.module'); }).then(function (m) { return m.EmailPageModule; }); }
    },
    {
        path: 'home1',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./home1/home1.module'); }).then(function (m) { return m.Home1PageModule; }); }
    },
    {
        path: 'save-login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./save-login/save-login.module'); }).then(function (m) { return m.SaveLoginPageModule; }); }
    },
    {
        path: 'verify',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./verify/verify.module'); }).then(function (m) { return m.VerifyPageModule; }); }
    },
    {
        path: 'code',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./code/code.module'); }).then(function (m) { return m.CodePageModule; }); }
    },
    {
        path: 'forgot1',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forgot1/forgot1.module'); }).then(function (m) { return m.Forgot1PageModule; }); }
    },
    {
        path: 'forgot2',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./forgot2/forgot2.module'); }).then(function (m) { return m.Forgot2PageModule; }); }
    },
    {
        path: 'accueil',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./accueil/accueil.module'); }).then(function (m) { return m.AccueilPageModule; }); }
    },
    {
        path: 'new-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./new-password/new-password.module'); }).then(function (m) { return m.NewPasswordPageModule; }); }
    },
    {
        path: 'product/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./product/product.module'); }).then(function (m) { return m.ProductPageModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
