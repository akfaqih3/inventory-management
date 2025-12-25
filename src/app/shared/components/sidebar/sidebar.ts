import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/i18n/service/language.service';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [TranslateModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private languageService = inject(LanguageService);
  
  isRTL = this.languageService.isRTL;

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
}
