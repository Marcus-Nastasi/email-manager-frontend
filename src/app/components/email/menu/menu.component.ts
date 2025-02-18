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
  HlmMenuLabelComponent,
  HlmMenuSeparatorComponent,
  HlmMenuShortcutComponent
} from '@spartan-ng/ui-menu-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';

@Component({
  selector: 'email-menu-component',
  standalone: true,
  imports: [
    HlmMenuComponent,
    HlmMenuItemDirective,
    HlmMenuLabelComponent,
    HlmMenuShortcutComponent,
    HlmMenuSeparatorComponent,
    HlmMenuItemIconDirective,
    HlmMenuGroupComponent,
    HlmIconDirective,
    BrnSelectImports,
    HlmSelectImports
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
    <hlm-menu class="w-56 border-0 border-r-2 rounded-r-none">
      <hlm-menu-label class="w-full flex justify-center p-1">
        <brn-select class="inline-block min-w-full" placeholder="Marcus">
          <hlm-select-trigger class="min-w-full">
            <hlm-select-value />
          </hlm-select-trigger>

          <hlm-select-content class="w-56">
              <hlm-option (click)="$event.preventDefault()" >
                Outlook
              </hlm-option>
              <hlm-option (click)="$event.preventDefault()" >
                Gmail
              </hlm-option>
          </hlm-select-content>
        </brn-select>
      </hlm-menu-label>
      
      <hlm-menu-separator />

      <hlm-menu-group>
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
})
export class EmailMenuComponent {}
