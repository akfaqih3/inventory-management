import { Component, inject } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "../../components/sidebar/sidebar";
import { LanguageService } from '../../../core/i18n/service/language.service';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {
  private languageService = inject(LanguageService);
  
  isRTL = this.languageService.isRTL;
}
