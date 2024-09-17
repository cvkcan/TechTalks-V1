import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../common/product-category';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrl: './product-category-menu.component.css'
})
export class ProductCategoryMenuComponent implements OnInit {
  
  productCategories: ProductCategory[] = [];

  constructor(private productService: ProductService){

  }

  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      d => {
        console.log(JSON.stringify(d));
        this.productCategories = d; 
      }
    )
  }

  ngOnInit(): void {
    this.listProductCategories();
  }

  

}
