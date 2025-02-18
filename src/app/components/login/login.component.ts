import { Component } from '@angular/core';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { FormsModule } from '@angular/forms';
import { ButtonSignInComponent } from "../../components/gmail/button-sign-in/button-sign-in.component";

/**
 * 
 * Login component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'app-login',
  imports: [
    HlmH1Directive,
    HlmCardDirective,
    BrnSelectImports,
    HlmSelectImports,
    FormsModule,
    ButtonSignInComponent
  ],
  template: `
    <main class="w-screen">
      <div hlmH1 class="text-center my-20">
        Sign in with Gmail
      </div>
      <form>
        <div class="flex justify-center">
          <section hlmCard class="flex justify-center p-5 sm:w-fit md:w-1/2 xl:w-1/3">
            <div class="m-3 flex items-center justify-between">
              <app-button-sign-in (click)="goToUrl($event)"  />
            </div>
          </section>
        </div>
      </form>
    </main>
  `,
})
export class LoginComponent {

  url: string = 'http://localhost:8080/oauth2/authorization/google';

  /**
   * 
   * This function allows to, on click, send to Google OAuth2 login page. 
   * 
   * @param $event the click event.
   */
  goToUrl($event: Event): void {
    $event.preventDefault();
    window.open(this.url, '_self');
  }
}
