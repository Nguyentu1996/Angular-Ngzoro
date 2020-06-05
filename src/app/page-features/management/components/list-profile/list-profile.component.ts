import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Observable } from 'rxjs/internal/Observable';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProfileComponent implements OnInit {
  @Input() profile : Profile[];
  @Output() confirmDelete = new EventEmitter();
  @Output() initCurrentProfile = new EventEmitter();
  @Output() clearCurrenProfile = new EventEmitter();
  constructor(
    private nzMess : NzMessageService
  ) { }

  ngOnInit(): void {
    // console.log("Profile",this.profile);
  }
  cancel(): void {
  }
  confirm(id:any):void {
    console.log("ID-Delete",id);
    this.confirmDelete.emit(id);
    this.nzMess.info('click confirm');
  }
  setCurrentProfile(id:any){
    console.log("ID current",id)
    this.initCurrentProfile.emit(id);
  }
  createProfile(){
    debugger;
    this.clearCurrenProfile.emit();
  }
}
