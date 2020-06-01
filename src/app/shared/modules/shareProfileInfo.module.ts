import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from 'src/app/page-features/home/components/profile-info/profile-info.component';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
    imports: [CommonModule,NzDescriptionsModule,NzBadgeModule],
    exports: [ProfileInfoComponent],
    declarations: [ProfileInfoComponent],
    providers: [],
})
export class ShareProfileModule { }
