import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProfileComponent implements OnInit {
  listOfData = [];
  constructor() { }

  ngOnInit(): void {
  }

}
