import {
  Component,
  computed,
  effect,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'isb-icon-checkbox',
  imports: [MatIconModule],
  templateUrl: './icon-checkbox.component.html',
  styleUrl: './icon-checkbox.component.scss',
})
export class IconCheckboxComponent {
  opendSymbol = input.required<string>();
  closedSymbol = input.required<string>();

  isChecked = model(true);
  symbol = computed(() =>
    this.isChecked() ? this.opendSymbol() : this.closedSymbol()
  );

  public changeState = output<boolean>();

  toggle(event: Event) {
    var isChecked = (event.target as HTMLInputElement).checked;
    this.isChecked.set(isChecked);
    this.changeState.emit(isChecked);
  }
}
