import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
}
