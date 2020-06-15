import { NgModule } from '@angular/core';
import { PanigatorComponent } from './panigator.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
    imports: [
        NzPaginationModule,

    ],
    exports: [PanigatorComponent],
    declarations: [PanigatorComponent],
    providers: [],
})
export class PanigatorModule { }
