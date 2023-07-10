import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { GraphService } from './graph.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product!: Product;
  graphImage: string | undefined;
  showImage: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private graphService: GraphService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.loadProduct(productId);
        this.loadGraph(productId);
      }
    });
  }

  loadProduct(productId: string) {
    this.productService.getProductById(productId).subscribe(
      (data: Product) => {
        this.product = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadGraph(productId: string) {
    this.graphService.getGraphImageByProductId(productId).subscribe(
      (response: any) => {
        if (response && response.graphImage) {
          this.graphImage = response.graphImage;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  showGraph() {
    this.showImage = true;
    console.log(this.graphImage);
  }
}
