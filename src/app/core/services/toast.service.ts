import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: number;
    message: string;
    type: ToastType;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private translateService = inject(TranslateService);
    toasts = signal<Toast[]>([]);

    show(messageKey: string, type: ToastType = 'success') {
        const id = Date.now();
        const message = this.translateService.instant(messageKey);
        const toast: Toast = { id, message, type };

        this.toasts.update(toasts => [...toasts, toast]);

        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }

    remove(id: number) {
        this.toasts.update(toasts => toasts.filter(t => t.id !== id));
    }
}
