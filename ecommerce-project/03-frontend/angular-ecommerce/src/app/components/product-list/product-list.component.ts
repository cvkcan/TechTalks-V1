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
  currenctCategoryName: string = "";
  searchMode: boolean = false;
  constructor(private productService: ProductService,
              private route: ActivatedRoute 
  ) {}

  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
    const theKeywords: string = this.route.snapshot.paramMap.get('keyword')!;
    this.productService.searchProducts(theKeywords).subscribe(
      d => {
        this.products = d;
      }
    )

  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      this.currenctCategoryId =+ this.route.snapshot.paramMap.get('id')!;
      this.currenctCategoryName = this.route.snapshot.paramMap.get('name')!;
    }
    else {
      this.currenctCategoryId = 1;
      this.currenctCategoryName = "Books";
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
