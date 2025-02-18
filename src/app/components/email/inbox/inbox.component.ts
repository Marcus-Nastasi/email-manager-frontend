import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCircleUser,
  lucideLayers,
  lucideMessageSquare,
  lucideCode,
  lucideMail,
  lucideLogOut,
  lucideSmile,
  lucideCog,
  lucideGithub,
  lucideKeyboard,
  lucideUser,
  lucidePlus,
  lucideCirclePlus,
  lucideCircleHelp,
} from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuItemDirective,
  HlmMenuItemIconDirective,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent
} from '@spartan-ng/ui-menu-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { EmailCardComponent } from './email-card/email-card.component';

@Component({
  selector: 'email-inbox-component',
  standalone: true,
  imports: [
    HlmFormFieldModule,
    HlmMenuComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    HlmIconDirective,
    BrnSelectImports,
    HlmSelectImports,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmInputDirective,
    EmailCardComponent
  ],
  providers: [
    provideIcons({
      lucideUser,
      lucideLayers,
      lucideCog,
      lucideKeyboard,
      lucideCircleUser,
      lucideSmile,
      lucidePlus,
      lucideGithub,
      lucideCircleHelp,
      lucideCode,
      lucideLogOut,
      lucideMail,
      lucideMessageSquare,
      lucideCirclePlus,
    }),
  ],
  template: `
    <hlm-menu class="w-full h-full border-0 border-r-2 rounded-none">
      <div class="w-full flex justify-between p-2.5">
        <div>
          <h3 class="text-lg font-bold">
            Inbox
          </h3>
        </div>
        <div class="w-32 h-5 relative bottom-1 hover:cursor-default">
          <hlm-tabs tab='account' class='block rounded-2xl hover:cursor-default'>
            <hlm-tabs-list class='grid grid-cols-2 h-9 hover:cursor-default' aria-label='tabs example' >
              <button class="h-7 hover:cursor-default" hlmTabsTrigger='account' style="font-size: 12px;">
                All mail
              </button>
              <button class="h-7 hover:cursor-default" hlmTabsTrigger='password' style="font-size: 12px;">
                Unread
              </button>
            </hlm-tabs-list>
          </hlm-tabs>
        </div>
      </div>
      <hlm-menu-separator />
      <div class="w-full flex justify-center items-center p-2">
        <ng-icon hlm name="lucideSearch" class="inline-flex" />
        <input
          type="text"
          hlmInput
          size="sm"
          placeholder="Search"
          class="w-full h-8 mt-0.5 focus-visible:ring-transparent search-input"
        />
      </div>
      <hlm-menu-group class="px-2">
        <!-- Continue... -->
        
        <inbox-email-card />

      </hlm-menu-group>
    </hlm-menu>
  `,
  styles: `
    .search-input:focus {
      border: 0.1px solid rgb(200, 200, 200);
      box-shadow: 0px 0px 1.7px 0.01px;
    }
  `
})
export class EmailInboxComponent {}
