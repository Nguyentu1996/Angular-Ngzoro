import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Translate  {
   // key that is used to access the data in local storageconst

  private STORAGE_KEY = 'local_translate';
  langs = ['en', 'vi'];
  public currentlanguage$ = new Subject();
  constructor(
    private _translate : TranslateService,
    @Inject(LOCAL_STORAGE) private storage: StorageService ) {}
   
   public initLanguage(){
    this._translate.addLangs(this.langs);
    let browserlanguage = this._translate.getBrowserLang();
    if(browserlanguage){
       this._translate.setDefaultLang(browserlanguage);
    }else{
       this._translate.setDefaultLang('en');
    }
   }
}
