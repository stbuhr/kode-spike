import { Component } from '@angular/core';
import { KodeAddressComponent } from '../kode-address/kode-address.component';
import { KodeLinksComponent } from '../kode-links/kode-links.component';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';

@Component({
  selector: 'isb-page-footer',
  imports: [KodeAddressComponent, KodeLinksComponent, SocialNetworksComponent],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss',
})
export class PageFooterComponent {}
