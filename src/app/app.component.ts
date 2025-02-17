import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HomeComponent,
    BrnSelectImports,
    HlmSelectImports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  theme: string = '';

  handleThemeChange(): void {
    const htmlEl = document.getElementsByTagName('html')[0];
    htmlEl.classList.contains('light') 
      ? htmlEl.classList.replace('light', 'dark') 
      : htmlEl.classList.replace('dark', 'light');
  }
}
