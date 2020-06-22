import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AntdModule } from './ng-zoro-antd.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NzIconsModule } from './nz-icon.module';
import { AuthGuardService } from './shared/services/guard/auth-guard.service';
import { AuthInterceptorService } from './shared/services/interceptor/auth-interceptor.service';
import { Translate } from './shared/translate.service';
import { TranslateLoaderModule } from './shared/translates/translateLoader.module';

export function initLanguage(translateService: Translate): Function {
  return (): Promise<any> => translateService.initLanguage();
}
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoreModule,
    NzIconsModule,
    TranslateLoaderModule,
    // AntdModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StorageServiceModule
  ],
  providers: [ AuthGuardService,
             { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
             { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [Translate] },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
