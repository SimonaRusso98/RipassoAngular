import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  count: number=0;
  isClicked = false;




/* counter =()=> {
   if(this.isClicked){
     console.log(this.isClicked);
    this.count = this.count+1;
   }
    return this.count;
  }
*/

counter = () =>{
  this.count = this.count +1;
}
  getCount =()=> {
    return this.count;
};
}


