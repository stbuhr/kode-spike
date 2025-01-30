import { Component, input, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconCheckboxComponent } from '../../controls/icon-checkbox/icon-checkbox.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'isb-page-navigation',
  imports: [MatIconModule, IconCheckboxComponent, RouterLink, RouterLinkActive],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.scss',
  host: {
    '[class.small]': 'isSmall()',
    '[class.open]': 'isOpen()',
    '(click)': 'clickToClose()',
  },
})
export class PageNavigationComponent {
  public isSmall = signal(false);
  public isOpen = input(false);
  public closeMenu = output();

  toggleWidth(isOpen: boolean) {
    this.isSmall.set(!isOpen);
  }
  clickToClose() {
    this.closeMenu.emit();
  }
}
