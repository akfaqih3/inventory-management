import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/i18n/service/language.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [TranslateModule, ThemeToggleComponent, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private languageService = inject(LanguageService);

  isRTL = this.languageService.isRTL;
  isOpen = signal(false);

  items: SidebarItem[] = [
    {
      label: "navigation.dashboard",
      icon: "home",
      route: "/dashboard"
    },
    {
      label: "navigation.products",
      icon: "store",
      route: "/products"
    },
  ]

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleSidebar() {
    this.isOpen.update(v => !v);
  }
}
