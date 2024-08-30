import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "mail@mail",50000),
    new SalesPerson("Anup2", "Kumar2", "mail@mail2",500002),
    new SalesPerson("Anup3", "Kumar3", "mail@mail3",500003),
    new SalesPerson("Anup4", "Kumar4", "mail@mail4",500004)
  ];
}
