import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent
} from '@spartan-ng/ui-menu-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { GoogleAuthService } from './services/auth/google-auth.service';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import {
  lucideArchive,
  lucideArchiveX,
  lucideTrash2,
  lucideClock,
  lucideCornerUpLeft,
  lucideReplyAll,
  lucideForward,
  lucideEllipsisVertical,
  lucideSunMoon
} from '@ng-icons/lucide';

/**
 * 
 * App component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HlmButtonDirective,
    BrnSelectImports,
    HlmSelectImports,
    BrnMenuTriggerDirective,
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemDirective,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    NgIcon
  ],
  providers: [
    provideIcons({
      lucideArchive,
      lucideArchiveX,
      lucideTrash2,
      lucideClock,
      lucideCornerUpLeft,
      lucideReplyAll,
      lucideForward,
      lucideEllipsisVertical,
      lucideMoon,
      lucideSun,
      lucideSunMoon
    }),
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private readonly googleAuthService: GoogleAuthService) {}

  // State variables.
  theme: string = 'light';

  /**
   * 
   * 
   */
  ngOnInit(): void {
    const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
    const theme: string | null = localStorage.getItem('theme');
    const htmlClassList: DOMTokenList = htmlEl.classList;
    if (theme) {
      if (theme === 'dark' && htmlClassList.contains('light')) {
        htmlClassList.replace('light', 'dark');
      } else if (theme === 'light' && htmlClassList.contains('dark')) {
        htmlClassList.replace('dark', 'light');
      }
    }
    this.googleAuthService.getUser();
    this.googleAuthService.getToken();
  }

  /**
   * 
   * Handling global theme on app.
   */
  handleThemeChange($event: Event): void {
    const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
    const themeEvent: string = ($event.target as HTMLButtonElement).value;
    const htmlClassList: DOMTokenList = htmlEl.classList;
    if (themeEvent === 'Light' && htmlClassList.contains('dark')) {
      htmlClassList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else if (themeEvent === 'Dark' && htmlClassList.contains('light')) {
      htmlClassList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
}
