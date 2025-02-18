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
import {
	HlmTabsComponent,
	HlmTabsListComponent,
	HlmTabsTriggerDirective
} from '@spartan-ng/ui-tabs-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';

@Component({
  selector: 'email-inbox-component',
  standalone: true,
  imports: [
    HlmFormFieldModule,
    BrnToggleDirective,
    HlmToggleDirective,
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,
    HlmIconDirective,
    BrnSelectImports,
    HlmSelectImports,
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmInputDirective
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
          class="w-full h-8 my-1 focus-visible:ring-transparent search-input"
        />
      </div>

      <hlm-menu-group class="px-2 mb-1">

        <button brnToggle hlm variant="outline" class=" px-3 py-7">
          <div class="flex flex-col items-start">
            <p class="text-sm font-semibold">
              Accenture
            </p>
            <hlm-hint class=" text-xs mt-1">This is your email address.</hlm-hint>
          </div>
        </button>

        <button hlmMenuItem>
          <ng-icon hlm name="lucideUser" hlmMenuIcon />
          <span>Inbox</span>
          <hlm-menu-shortcut>⇧⌘P</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideLayers" hlmMenuIcon />
          <span>Drafts</span>
          <hlm-menu-shortcut>⌘B</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideCog" hlmMenuIcon />
          <span>Sent</span>
          <hlm-menu-shortcut>⌘S</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideKeyboard" hlmMenuIcon />
          <span>Junk</span>
          <hlm-menu-shortcut>⌘K</hlm-menu-shortcut>
        </button>
      </hlm-menu-group>

      <hlm-menu-group>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideCircleUser" hlmMenuIcon />
          <span>Trash</span>
          <hlm-menu-shortcut>⌘B</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucidePlus" hlmMenuIcon />
          <span>Archive</span>
          <hlm-menu-shortcut>⌘+T</hlm-menu-shortcut>
        </button>
      </hlm-menu-group>

      <hlm-menu-separator />

      <hlm-menu-group>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideGithub" hlmMenuIcon />
          <span>Social</span>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideCircleHelp" hlmMenuIcon />
          <span>Updates</span>
        </button>
        <button hlmMenuItem disabled>
          <ng-icon hlm name="lucideCode" hlmMenuIcon />
          <span>Forums</span>
        </button>
      </hlm-menu-group>

      <button hlmMenuItem>
        <ng-icon hlm name="lucideLogOut" hlmMenuIcon />
        <span>Shopping</span>
        <hlm-menu-shortcut>⇧⌘Q</hlm-menu-shortcut>
      </button>
      <button hlmMenuItem>
        <ng-icon hlm name="lucideLogOut" hlmMenuIcon />
        <span>Promotions</span>
        <hlm-menu-shortcut>⇧⌘Q</hlm-menu-shortcut>
      </button>
    </hlm-menu>
  `,
  styleUrls: ['./inbox.component.css']
})
export class EmailInboxComponent {}
