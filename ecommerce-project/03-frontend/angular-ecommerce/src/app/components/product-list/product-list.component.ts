import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];
  currenctCategoryId: number = 1;
  currenctCategoryName: string = "";
  previousCategoryId: number = 1;
  searchMode: boolean = false;
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;
  previousKeyword: string = "";

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService
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
    if(this.previousKeyword != theKeywords) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeywords;

    this.productService.searchProductsPaginate(this.thePageNumber -1, this.thePageSize, theKeywords
    ).subscribe(
      this.proccessResult()
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

    if (this.previousCategoryId != this.currenctCategoryId){
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currenctCategoryId;


    this.productService.getProductListPaginate(this.thePageNumber - 1, this.thePageSize, this.currenctCategoryId)
    .subscribe(this.proccessResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize =+ pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  proccessResult(){
    return (data: any) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    }
  }

  addToCart(theProduct : Product){
    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    this.listProducts();
  }

}
