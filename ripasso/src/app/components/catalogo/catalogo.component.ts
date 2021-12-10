import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})


export class CatalogoComponent implements OnInit {

constructor(private cs: CartService) { }

  counts: number| undefined= 0;
  description  = false;
  description1 = false; 
  description2 = false;
  description3 = false; 
  
 
  ngOnInit(){
    console.log(this.counts);
  }

  
  showDesc(){
    this.description= true; 
    this.description1 = false; 
    this.description2 = false; 
    this.description3= false; 
  }

  showDesc1(){
    this.description= false; 
    this.description1 = true; 
    this.description2 = false; 
    this.description3= false; 
  }

  showDesc2(){
    this.description= false; 
    this.description1 = false;
    this.description2 = true;  
    this.description3= false; 
  }

  showDesc3(){
    this.description3= true; 
    this.description= false; 
    this.description1 = false;
    this.description2 = false;  
  }

  set setData(v:number){
    this.cs.count=v;
   }
   
  callService=()=>{
    this.cs.isClicked= !this.cs.isClicked;
    const res = this.cs.counter();
    console.log(res);
  }
}
