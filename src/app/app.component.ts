import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
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
import { GoogleAuthService } from './services/auth/google-auth.service';

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
    HomeComponent,
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
    HlmMenuSeparatorComponent
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
