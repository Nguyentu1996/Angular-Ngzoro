import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../model/profilePayload';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
@Input() profile$: Observable<Profile>;
profile : Profile;
  constructor() { }

  ngOnInit(): void {
    // this.profile$.pipe(filter(v => v !== undefined && null));
    this.profile$.subscribe(data=>{
      if(data != null ){
        this.profile = data;
      }
    })
    
  }

}
