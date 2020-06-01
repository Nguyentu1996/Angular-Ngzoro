import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProfileComponent implements OnInit {
  @Input() profile : Profile[];
  constructor() { }

  ngOnInit(): void {
    // console.log("Profile",this.profile);
  }
 
}
