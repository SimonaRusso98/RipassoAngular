import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.setDefaultTranslation();
  }
  private setDefaultTranslation(): void {
    const translate = this.translate.getBrowserLang(); 
    if (translate) {
      ['en', 'es', 'zh', 'ru'].indexOf(translate) > -1
     ? this.translate.setDefaultLang(translate)
     : this.translate.setDefaultLang('en');
    }
   }

 public switchLanguage(lang: string): void {
   this.translate.setDefaultLang(lang);
 }

}
