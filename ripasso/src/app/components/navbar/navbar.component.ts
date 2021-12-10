import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myCount: number| undefined | null;

  constructor(public cs: CartService) { }

  ngOnInit() {
  
  }

  get setData(): number{
    return this.cs.count;
    }
      


}
