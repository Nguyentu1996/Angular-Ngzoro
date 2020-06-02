import { NgModule } from '@angular/core';
import { ProfileInfoComponent } from 'src/app/page-features/home/components/profile-info/profile-info.component';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffect } from 'src/app/page-features/home/state/home.effect';
import { reducer } from 'src/app/page-features/home/state/home.reducer';

@NgModule({
    imports: [CommonModule,
        NzDescriptionsModule,
        NzBadgeModule,
        StoreModule.forFeature('home',reducer),
        EffectsModule.forFeature([HomeEffect]),
    ],
    exports: [ProfileInfoComponent],
    declarations: [ProfileInfoComponent],
    providers: [],
})
export class ShareProfileModule { }
