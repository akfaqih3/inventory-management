import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
    selector: 'app-theme-toggle',
    standalone: true,
    imports: [CommonModule],
    templateUrl:'theme-toggle.component.html',
    styles: [`
    :host {
      display: block;
    }
  `]
})
export class ThemeToggleComponent {
    themeService = inject(ThemeService);
}
