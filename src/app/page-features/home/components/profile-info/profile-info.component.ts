import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../model/profilePayload';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromHome from "../../state/home.selector";
import * as homeActions from "../../state/home.actions";
import { SubjectService } from '../../service/data-subject';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileInfoComponent implements OnInit ,OnChanges{
  @Input() profile: Profile;
  private id: any;
  constructor(
    private cd: ChangeDetectorRef,
    private router: ActivatedRoute,
    private store: Store<fromHome.State>,
    private subjectService : SubjectService


  ) {
    let obj ={
      page:"Manager",
      pageChild:"Info"
    }
    this.subjectService.breadcrumb$.next(obj);
    this.id = this.router.snapshot.params.id;
    
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.profile){
      debugger;
      this.cd.markForCheck();
    }
  }


  ngOnInit(): void {
    if (this.id) {
      this.store.dispatch(new homeActions.LoadProfile(this.id))
    }
    this.store.pipe(select(fromHome.getProfile())).subscribe(data => {
      if (data) {
        this.profile = data;
        this.cd.markForCheck();
      }
    });
  }

}
