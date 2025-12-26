import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-confirm-modal',
    imports: [TranslateModule],
    templateUrl: './confirm-modal.html',
})
export class ConfirmModalComponent {
    title = input<string>('common.confirm');
    message = input<string>('common.confirmMessage');
    confirmLabel = input<string>('common.confirm');
    cancelLabel = input<string>('common.cancel');
    type = input<'danger' | 'info' | 'warning'>('danger');

    confirm = output<void>();
    cancel = output<void>();

    onConfirm() {
        this.confirm.emit();
    }

    onCancel() {
        this.cancel.emit();
    }
}
