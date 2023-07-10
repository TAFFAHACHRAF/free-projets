"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccueilPage = void 0;
var core_1 = require("@angular/core");
var AccueilPage = /** @class */ (function () {
    function AccueilPage(router, productService) {
        this.router = router;
        this.productService = productService;
        this.products = [];
    }
    AccueilPage.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    AccueilPage.prototype.loadProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (data) {
            _this.products = data;
        }, function (error) {
            console.log(error);
        });
    };
    AccueilPage.prototype.showProductDetails = function (productId) {
        this.router.navigate(['/product', productId]);
    };
    AccueilPage = __decorate([
        core_1.Component({
            selector: 'app-accueil',
            templateUrl: './accueil.page.html',
            styleUrls: ['./accueil.page.scss']
        })
    ], AccueilPage);
    return AccueilPage;
}());
exports.AccueilPage = AccueilPage;
