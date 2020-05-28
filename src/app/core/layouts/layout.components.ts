import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './layout.components.html',
    styles: [
    `
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }

      nz-header {
        background: #fff;
        padding: 0;
      }

      nz-content {
        margin: 0 16px;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      .inner-content {
        padding: 24px;
        background: #fff;
        // min-height: 360px;
          min-height: 75vh ;
      }

      nz-footer {
        text-align: center;
      }
 
    `
  ],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class LayoutComponent implements OnInit {
    isCollapsed = false;

    constructor() { }

    ngOnInit() { }
}