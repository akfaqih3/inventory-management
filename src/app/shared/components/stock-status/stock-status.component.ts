import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockStatusDirective, StockStatusInfo } from '../../directives/stock-status.directive';

@Component({
  selector: 'app-stock-status',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full" [ngClass]="statusIndicatorClass"></div>
      <span class="text-xs font-medium" [ngClass]="statusTextClass">
        {{ statusInfo.label }}
      </span>
    </div>
  `,
  styles: [`
    .status-in-stock { color: #15803d; }
    .status-low { color: #a16207; }
    .status-critical { color: #c2410c; }
    .status-out-of-stock { color: #dc2626; }

    .indicator-in-stock { background-color: #22c55e; }
    .indicator-low { background-color: #eab308; }
    .indicator-critical { background-color: #f97316; }
    .indicator-out-of-stock { background-color: #ef4444; }
  `]
})
export class StockStatusComponent {
  @Input() quantity!: number;

  get statusInfo(): StockStatusInfo {
    return StockStatusDirective.getStockStatusInfo(this.quantity);
  }

  get statusIndicatorClass(): string {
    return `indicator-${this.statusInfo.status}`;
  }

  get statusTextClass(): string {
    return `status-${this.statusInfo.status}`;
  }
}