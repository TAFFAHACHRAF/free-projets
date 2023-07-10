"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductPage = void 0;
var core_1 = require("@angular/core");
var ProductPage = /** @class */ (function () {
    function ProductPage(route, productService, graphService) {
        this.route = route;
        this.productService = productService;
        this.graphService = graphService;
        this.showImage = false;
    }
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var productId = params.get('id');
            if (productId) {
                _this.loadProduct(productId);
                _this.loadGraph(productId);
            }
        });
    };
    ProductPage.prototype.loadProduct = function (productId) {
        var _this = this;
        this.productService.getProductById(productId).subscribe(function (data) {
            _this.product = data;
        }, function (error) {
            console.log(error);
        });
    };
    ProductPage.prototype.loadGraph = function (productId) {
        var _this = this;
        this.graphService.getGraphImageByProductId(productId).subscribe(function (response) {
            if (response && response.graphImage) {
                _this.graphImage = response.graphImage;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductPage.prototype.showGraph = function () {
        this.showImage = true;
        console.log(this.graphImage);
    };
    ProductPage = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.page.html',
            styleUrls: ['./product.page.scss']
        })
    ], ProductPage);
    return ProductPage;
}());
exports.ProductPage = ProductPage;
