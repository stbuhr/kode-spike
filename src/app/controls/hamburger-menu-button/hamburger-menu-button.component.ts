import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'isb-hamburger-menu-button',
  imports: [],
  templateUrl: './hamburger-menu-button.component.html',
  styleUrl: './hamburger-menu-button.component.scss',
})
export class HamburgerMenuButtonComponent {
  isChecked = signal(false);
  change = output<boolean>();

  toggle() {
    this.isChecked.set(!this.isChecked());
    this.change.emit(this.isChecked());
  }
}
