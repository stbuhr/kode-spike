import { Component } from '@angular/core';
import { UserIndicatorComponent } from '../user-indicator/user-indicator.component';
import { NotificationIndicatorComponent } from '../notification-indicator/notification-indicator.component';

@Component({
  selector: 'isb-page-header',
  imports: [UserIndicatorComponent, NotificationIndicatorComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {}
