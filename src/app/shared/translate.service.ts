import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// key that is used to access the data in local storageconst

@Injectable({
  providedIn: 'root'
})
export class Translate  {
  STORAGE_KEY = 'local_translate';
  langs = ['en', 'vi'];

  constructor(
    private _translate : TranslateService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
  
   }
   public setLanguage(){
   let browserlanguage = this._translate.getBrowserLang();

     if(browserlanguage){
       this._translate.setDefaultLang(browserlanguage);
     }else{
       this._translate.setDefaultLang('en');
     }
   }
}
