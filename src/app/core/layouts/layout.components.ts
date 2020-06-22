import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SubjectService } from 'src/app/page-features/home/service/data-subject';
import { StoragesService } from 'src/app/shared/services/storage/storage.service';
import { Router } from '@angular/router';
import { Translate } from 'src/app/shared/translate.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-main',
    templateUrl: './layout.components.html',
    styles: [
    `
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        // min-height: 360px;
          min-height: 75vh ;
      }

      nz-footer {
        text-align: center;
      }
 
    `
  ],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class LayoutComponent implements OnInit {
    isCollapsed = false;
    page = '';
    pageChild ='';
    languages = [
      { code: 'vi',name :"Tiếng việt"},  
      { code: 'en', name :"English"} 
    ];
    currentLanguage : any;
    code = new FormControl("");
    constructor(
      private _subjectService : SubjectService,
      private storage :StoragesService,
      private router : Router,
      private translate : Translate
    ) {
      this._subjectService.breadcrumb$.subscribe(data => {
        this.page = data.page;
        this.pageChild = data.pageChild;
      });
      // this.translate.currentlanguage$.subscribe(val=>{
      //   console.log("Subject",val)
      //   if(val){
      //     console.log("CurrentLangSubject",val);

      //     this.currentLanguage = val;
      //     this.code.setValue({
      //       code : val
      //     })
      //   }
      // });
      // debugger;
      // this.language.setValue({language: this.translate.getCurrentLanguage()});
     }

    ngOnInit() { 
      this.code.valueChanges.subscribe(val => {
        console.log("CurrentLang",val);
        if(val != this.currentLanguage){
          this.translate.changeLanguage(val);
        }
      })
    }
    logout(){
      this.storage.removeToken();
      this.router.navigateByUrl("/auth");
    }
}