import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../model/profilePayload';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileInfoComponent implements OnInit {
@Input() profile$: Observable<Profile>;
// profile : Profile;
  constructor(
    private cd : ChangeDetectorRef
  ) { }
 
  ngOnInit(): void {
    this.profile$.subscribe(data=>{
      if(data != null ){
        this.cd.markForCheck()
      }
    })
    
  }

}
