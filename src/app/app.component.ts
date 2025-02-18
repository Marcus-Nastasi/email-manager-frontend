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
  HlmMenuItemIconDirective,
  HlmMenuItemSubIndicatorComponent,
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
  lucideEllipsisVertical
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
    HlmMenuItemIconDirective,
    HlmMenuItemSubIndicatorComponent,
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
      lucideSun
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
   * 
   */
  ngOnInit(): void {
    const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
    const theme: string | null = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark' && htmlEl.classList.contains('light')) {
        htmlEl.classList.replace('light', 'dark');
      } else if (theme === 'light' && htmlEl.classList.contains('dark')) {
        htmlEl.classList.replace('dark', 'light');
      }
    }
    this.googleAuthService.getUser();
    this.googleAuthService.getToken();
  }

  /**
   * 
   * Handling global theme on app.
   * 
   */
  handleThemeChange($event: Event): void {
    const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
    if (($event.target as HTMLButtonElement).value === 'Light' && htmlEl.classList.contains('dark')) {
      htmlEl.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      return
    } else if (($event.target as HTMLButtonElement).value === 'Dark' && htmlEl.classList.contains('light')) {
      htmlEl.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      return
    }
  }
}
