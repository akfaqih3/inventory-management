import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly THEME_KEY = 'theme-preference';

    // Signal to track the current theme
    isDarkMode = signal<boolean>(this.getInitialTheme());

    constructor() {
        // Effect to apply the theme class to the document and save to localStorage
        effect(() => {
            const dark = this.isDarkMode();
            if (dark) {
                document.documentElement.classList.add('dark');
                localStorage.setItem(this.THEME_KEY, 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem(this.THEME_KEY, 'light');
            }
        });
    }

    toggleTheme() {
        this.isDarkMode.update(dark => !dark);
    }

    private getInitialTheme(): boolean {
        const savedTheme = localStorage.getItem(this.THEME_KEY);
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Fallback to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}
