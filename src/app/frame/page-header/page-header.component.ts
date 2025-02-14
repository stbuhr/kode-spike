import { Component, output, viewChild } from '@angular/core';
import { UserIndicatorComponent } from '../user-indicator/user-indicator.component';
import { NotificationIndicatorComponent } from '../notification-indicator/notification-indicator.component';
import { HamburgerMenuButtonComponent } from '../../controls/hamburger-menu-button/hamburger-menu-button.component';

@Component({
  selector: 'isb-page-header',
  imports: [UserIndicatorComponent, NotificationIndicatorComponent, HamburgerMenuButtonComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  public changeMenuState = output<boolean>();
  menuButton = viewChild(HamburgerMenuButtonComponent);

  toggleMenu($event: boolean) {
    this.changeMenuState.emit($event);
  }
  menuClosed() {
    this.menuButton()?.toggle();
  }
}
