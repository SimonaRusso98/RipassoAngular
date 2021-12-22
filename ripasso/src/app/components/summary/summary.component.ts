import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(public cs: CartService) { }

  ngOnInit(): void {
  }

  get setName():string{
      return this.cs.name;
  }

  get setSurname():string{
    return this.cs.surname;
  }

  get setAddress(): string{
    return this.cs.address;
  }
}
