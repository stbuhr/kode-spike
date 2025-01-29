import { Component, HostBinding, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconCheckboxComponent } from '../../controls/icon-checkbox/icon-checkbox.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'isb-page-navigation',
  imports: [MatIconModule, IconCheckboxComponent, RouterLink, RouterLinkActive],
  templateUrl: './page-navigation.component.html',
  styleUrl: './page-navigation.component.scss',
})
export class PageNavigationComponent {
  public isOpen = signal(true);

  toggleWidth(isOpen: boolean) {
    this.isOpen.set(isOpen);
  }

  @HostBinding('class')
  get cssClass() {
    return this.isOpen() ? 'opened' : 'closed';
  }
}
