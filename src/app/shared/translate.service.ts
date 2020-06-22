import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
const LANG_LIST = [
   { code: 'vi',name :"Tiếng việt"},  
   { code: 'en', name :"English"} 
 ];
 const LANG_DEFAULT = LANG_LIST[0];

 const STORAGE_KEY = 'local_translate';
@Injectable({
  providedIn: 'root'
})
export class Translate  {
   // key that is used to access the data in local storageconst

  
  public currentlanguage$ = new Subject();
  constructor(
    private _translate : TranslateService,
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    @Inject(DOCUMENT) private _document: any, ) {
    }
   
   public initLanguage(){
   return new Promise((resolve:Function) => {
      this._translate.addLangs(LANG_LIST.map((lang) => lang.code));
      const language = this.getLanguage();
      if (language) {
         this._translate.setDefaultLang(language.code);
       } else {
         this._translate.setDefaultLang(LANG_DEFAULT.code);
       }
       this.setLanguage(language);
       resolve();
   });
   };
   public changeLanguage(code){
      debugger;
      const lang = this._getFindLang(code);
      if (!lang || lang.code === this._translate.currentLang) {
         return;
       }
       this.storage.set(STORAGE_KEY, lang.code);
       this.setLanguage(lang);
   }
   private setLanguage(lang){
      debugger;
      if(lang){
         this._translate.use(lang.code).subscribe(() => {
            this._document.documentElement.lang = lang.code;
          });
          debugger;

          this.currentlanguage$.next(lang.code);

      }
      
   };
   
   private _getFindLang(code: string) {
      return code ? LANG_LIST.find((lang) => lang.code === code) : null;
   }
   private getLanguage(){
     let language = this._getFindLang(this.storage.get(STORAGE_KEY));
     if(language){
        return language;
     }
     language = language || LANG_DEFAULT;
     this.storage.set(STORAGE_KEY, language.code);
     this.currentlanguage$.next(language.code);
     return language;
   };
   public getCurrentLanguage(){
      return this.storage.get(STORAGE_KEY);
   }
  
   
}
