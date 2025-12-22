import { Component } from '@angular/core';

interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  items: SidebarItem[] = [
    {
      label: "Dashboard",
      icon: "home",
      route: "/dashboard"
    },
    {
      label: "Products",
      icon: "store",
      route: "/products"
    },
  ]
}
