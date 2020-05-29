import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-management-shell',
  templateUrl: './management-shell.component.html',
  styleUrls: ['./management-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ManagementShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
