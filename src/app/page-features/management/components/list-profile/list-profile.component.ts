import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { OnChangeType } from 'ng-zorro-antd/core/types/public-api';
import { Department } from '../../models/department';
import { FormControl } from '@angular/forms';
import { SubjectService } from 'src/app/page-features/home/service/data-subject';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProfileComponent implements OnInit,OnChanges ,OnDestroy{
  @Input() profile : Profile[];
  @Input() department : Department[];
  @Output() confirmDelete = new EventEmitter();
  @Output() initCurrentProfile = new EventEmitter();
  @Output() clearCurrenProfile = new EventEmitter();
  @Output() filterProfile = new EventEmitter();
  @Output() getAll = new EventEmitter();
  @Output() searchName = new EventEmitter();
  @Output() pageChange = new EventEmitter();
  subscription : Subscription;
  subscription1 : Subscription;
  filterValue : string;
  filter = new FormControl();
  searchByEmail = new FormControl();
  searchByAddress = new FormControl();
  searchByName = new FormControl();
// 
  listOfCurrentPageData: Profile[] = [];
  sizeProfile : number;
  sizeChanger : number;
  pageLimit = 15;
  load = false;
  sideChanger = true;
  constructor(
    private nzMess : NzMessageService,
    private cd: ChangeDetectorRef,
    private subjectService : SubjectService 
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription1.unsubscribe();
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.load = false;
    this.cd.markForCheck();
  }

  ngOnInit(): void {
    this.subscription1 = this.searchByName.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.filterValue = value;
      if(value){
        this.load = true;
        this.searchName.emit(value);
      }else{
        this.getAll.emit();
      }
    }
    );
    this.subscription = this.filter.valueChanges.subscribe(value => {
      this.load = true;
      if(value){
        this.filterProfile.emit(value);
      }else{
        this.getAll.emit();
      }
    });
  }
  cancel(): void {
  }
  confirm(id:any):void {
    console.log("ID-Delete",id);
    this.confirmDelete.emit(id);
    this.nzMess.info('delete success');
  }
  setCurrentProfile(id:any){
    let obj={
      page:"Manager",
      pageChild:"Update"
    }
    this.subjectService.breadcrumb$.next(obj);
    console.log("ID current",id)
    this.initCurrentProfile.emit(id);
  }
  createProfile(){
    let obj={
      page:"Manager",
      pageChild:"Create"
    };
    this.subjectService.breadcrumb$.next(obj);
    this.clearCurrenProfile.emit();
  }
//  Output Event Emitter

  pageIndexChange(pageCurrent:any){
    this.load = true;
    let obj ={
      page : pageCurrent ,
      limit : this.pageLimit
    }
    this.pageChange.emit(obj);
  }
  pageSizeChange(e:any){
    console.log("pagaSizeChange",e);
    this.pageLimit = e.limit;
    let obj ={
      page : e.page,
      limit : this.pageLimit
    }
    
    this.filter.setValue({
      searchByName :''
    });
    this.pageChange.emit(obj);
    

  }
}
