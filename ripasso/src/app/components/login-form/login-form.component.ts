import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  validations_form!:FormGroup;
  adminvalue:boolean=false;
  adminvalue1:boolean=false;
  isShown: boolean = true;
  showSpinner=false;
  name: string='';

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.validations_form = this.fb.group({
      username:['', Validators.required
        
      ],
      password:('')
    });
  }

  funcLog(){
    console.log(this.validations_form);
    if(this.validations_form.get('username')?.value=== 'admin'){
      console.log('valore esatto');
      this.adminvalue=true;
    }
    if(this.validations_form.get('password')?.value ==='admin'){
      console.log('valore esatto');
      this.adminvalue1=true;
    }
  }

  toggleShow() {
    this.isShown = ! this.isShown;
  }

    //funzione per far sparire lo spinner di loading dopo un tot tempo
    loadData(){
      this.showSpinner=true;
      setTimeout(()=>{
        this.showSpinner=false;
      },5000);
    }

    getvalue(){
     const res = this.validations_form.get('username');
     return res;
    }
}
