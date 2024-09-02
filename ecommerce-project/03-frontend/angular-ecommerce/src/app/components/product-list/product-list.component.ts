import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  currenctCategoryId: number = 1;

  constructor(private productService: ProductService,
              private route: ActivatedRoute 
  ) {}

  listProducts(){
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currenctCategoryId =+ this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currenctCategoryId = 1;
    }
    this.productService.getProductList(this.currenctCategoryId).subscribe(
      d => {
        this.products = d;
      }
    )
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    this.listProducts();
  }

}
