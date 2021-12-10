import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    surveyform!:FormGroup;
    str:string = JSON.stringify(this.surveyform);

    constructor(private fb: FormBuilder) { }

    states: string[] = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ];

  check1 = false;
  check2 = false;
  check3 = false;

    ngOnInit(): void {
      this.surveyform = this.fb.group({
        feelings: this.fb.group({
          yes:[''],
          no:[''],
          maybe:['']
        }),
        state:[''],
        age:['']
      })
    }

    get feelings(){
      return this.surveyform.get('feelings')
    }

    get state(){
      return this.surveyform.get('state')
    }

    get age(){
      return this.surveyform.get('age')
    }

    get value(){
      return this.surveyform.get('value');
    }
    showObj(surveyform:FormGroup){
      alert(this.surveyform.value);
    }
  
    
    onSubmit() {
      if (this.surveyform.valid) {
        console.log("Form Submitted!");
        console.log(this.surveyform);
    }
  }

  ifClicked1(){
    this.check1=!this.check1;
  }
  ifClicked2(){
    this.check2=!this.check2;
    this.check1=false;
    this.check3=false;
  }
  ifClicked3(){
    this.check3=!this.check3;
    this.check1=false;
    this.check2=false;
  }

  showAlert(){
    alert('Ecco per te uno sconto del 10%! EHFUNM');
  }

}
