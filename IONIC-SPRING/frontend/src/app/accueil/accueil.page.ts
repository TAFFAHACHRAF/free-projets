import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  products: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  logout() {
    // Perform any necessary logout logic
    // Redirect the user to the login page
    this.router.navigate(['home']);
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
