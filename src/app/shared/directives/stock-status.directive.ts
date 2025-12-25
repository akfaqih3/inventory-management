import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

export type StockStatus = 'in-stock' | 'low' | 'critical' | 'out-of-stock';

export interface StockStatusInfo {
  status: StockStatus;
  label: string;
  cssClass: string;
}

@Directive({
  selector: '[appStockStatus]',
  standalone: true
})
export class StockStatusDirective implements OnInit {
  @Input('appStockStatus') quantity!: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.applyStockStatusStyling();
  }

  private applyStockStatusStyling() {
    const statusInfo = StockStatusDirective.getStockStatusInfo(this.quantity);
    
    // Remove any existing stock status classes
    this.removeExistingClasses();
    
    // Apply new status class
    this.renderer.addClass(this.el.nativeElement, statusInfo.cssClass);
  }

  private removeExistingClasses() {
    const existingClasses = ['stock-in-stock', 'stock-low', 'stock-critical', 'stock-out-of-stock'];
    existingClasses.forEach(className => {
      this.renderer.removeClass(this.el.nativeElement, className);
    });
  }

  public static getStockStatusInfo(quantity: number): StockStatusInfo {
    if (quantity >= 10) {
      return {
        status: 'in-stock',
        label: 'In Stock',
        cssClass: 'stock-in-stock'
      };
    } else if (quantity >= 5) {
      return {
        status: 'low',
        label: 'Low',
        cssClass: 'stock-low'
      };
    } else if (quantity >= 1) {
      return {
        status: 'critical',
        label: 'Critical',
        cssClass: 'stock-critical'
      };
    } else {
      return {
        status: 'out-of-stock',
        label: 'Out of Stock',
        cssClass: 'stock-out-of-stock'
      };
    }
  }
}