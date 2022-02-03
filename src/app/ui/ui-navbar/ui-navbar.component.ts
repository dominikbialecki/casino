import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UiNavbarItem } from './ui-navbar-item';

@Component({
  selector: 'ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiNavbarComponent {
  @Input() items: UiNavbarItem[] = [];
}
