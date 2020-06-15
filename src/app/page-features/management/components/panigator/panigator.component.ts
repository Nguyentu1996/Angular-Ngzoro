import { Component, OnInit, Input, Output,EventEmitter, OnChanges, SimpleChanges, Directive, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-panigator',
  template: `
    <nz-pagination
     (nzPageIndexChange)="pageChange($event)"
     (nzPageSizeChange)="pageSizeChange($event)"
      [nzPageIndex]="pageCurrent"  
      [nzPageSize]= "pageLimit" 
      [nzTotal]="totalRow"
      [nzPageSizeOptions]="[5,10,15,20,30,40]"
      [nzShowSizeChanger] ="isShowSizeChange" >
      
      </nz-pagination>
  `,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PanigatorComponent implements OnInit ,OnChanges,OnDestroy{
  @Input() totalPage : number;
  @Input() totalRow : number;
  @Input() pageLimit : number;
  @Output() pageIndexChange = new EventEmitter();
  @Output() pageSizeChangeOutPut = new EventEmitter();
  isShowSizeChange :boolean = false;
  // @Output() page = new EventEmitter();

  pageCurrent = 1 ;
  defautPage : number = 1;
  // limitPage : number = 15;
  // nztotal : number = 0;
  constructor() {

  }
  ngOnDestroy(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
      
  }

  ngOnInit(): void {
   
    // this.page.emit(this.pageLimit);
  }
  pageChange(pageCurrent : number){
    this.pageCurrent = pageCurrent;
    this.pageIndexChange.emit(pageCurrent - 1);
  }
  pageSizeChange(e:any){
    let obj ={
      page : this.pageCurrent - 1 ,
      limit : e
    }
    this.pageSizeChangeOutPut.emit(obj);
    if(!this.pageCurrent){
          this.isShowSizeChange = false

    }
  }
}
