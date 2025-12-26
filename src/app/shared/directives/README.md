# Stock Status Directive

A custom Angular directive that highlights table rows based on product quantity levels and provides stock status information.

## Features

- **Row Highlighting**: Automatically applies background colors and left border styling based on quantity
- **Status Component**: Displays status labels with color-coded indicators
- **Responsive Design**: Works with Tailwind CSS classes
- **Internationalization**: Supports multiple languages

## Stock Status Levels

| Quantity | Status | Label | Styling |
|----------|--------|-------|---------|
| ≥ 10 | In Stock | "In Stock" | Green background with green border |
| 5-9 | Low | "Low" | Yellow background with yellow border |
| 1-4 | Critical | "Critical" | Orange background with orange border |
| 0 | Out of Stock | "Out of Stock" | Red background with red border |

## Usage

### Directive Usage
Apply the directive to table rows to highlight them based on quantity:

```html
<tr [appStockStatus]="product.quantity">
  <!-- table cells -->
</tr>
```

### Component Usage
Use the stock status component to display status information:

```html
<app-stock-status [quantity]="product.quantity"></app-stock-status>
```

## Implementation

The directive is implemented in `stock-status.directive.ts` and includes:
- Automatic CSS class application based on quantity
- Static method for getting status information
- TypeScript interfaces for type safety

The component is implemented in `stock-status.component.ts` and provides:
- Visual status indicators with colored dots
- Status labels
- Responsive design with Tailwind CSS