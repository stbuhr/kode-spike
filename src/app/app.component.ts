import { Component } from '@angular/core';
import { PageHeaderComponent } from '../frame/page-header/page-header.component';
import { PageNavigationComponent } from '../frame/page-navigation/page-navigation.component';
import { PageFooterComponent } from '../frame/page-footer/page-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'isb-root',
  imports: [
    RouterOutlet,
    PageHeaderComponent,
    PageNavigationComponent,
    PageFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kode-spike';
}
