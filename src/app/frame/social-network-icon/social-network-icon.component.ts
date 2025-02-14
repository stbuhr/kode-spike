import { Component, input } from '@angular/core';

@Component({
  selector: 'isb-social-network-icon',
  imports: [],
  templateUrl: './social-network-icon.component.html',
  styleUrl: './social-network-icon.component.scss',
})
export class SocialNetworkIconComponent {
  source = input.required<string>();
  link = input.required<string>();
  title = input.required<string>();
}
