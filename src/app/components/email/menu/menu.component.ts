import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideInbox,
  lucideSend,
  lucideFile,
  lucideArchiveX,
  lucideTrash2,
  lucideArchive,
  lucideShoppingCart,
  lucideUsers,
  lucideCircleAlert,
  lucideMessagesSquare,
  lucideSquareM,
  lucideTriangle
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

/**
 * 
 * The left menu component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
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
    HlmSelectImports,
    NgIcon
  ],
  providers: [
    provideIcons({
      lucideInbox,
      lucideSend,
      lucideFile,
      lucideArchiveX,
      lucideTrash2,
      lucideArchive,
      lucideShoppingCart,
      lucideUsers,
      lucideCircleAlert,
      lucideMessagesSquare,
      lucideSquareM,
      lucideTriangle
    }),
  ],
  template: `
    <hlm-menu class="w-56 h-full border-0 border-r-2 rounded-r-none">
      <hlm-menu-label class="w-full flex justify-center p-1 -mb-5">
        <brn-select class="inline-block min-w-full" placeholder="Mail">
          <hlm-select-trigger hlmMenuIcon class="min-w-full">

            @if (mailProvider === 'Gmail') {
              <ng-icon hlm name="lucideSquareM" hlmMenuIcon />
            } @else if (mailProvider === 'Outlook') {
              <ng-icon hlm name="lucideTriangle" hlmMenuIcon />
            }
            
            <hlm-select-value />
          </hlm-select-trigger>
          <hlm-select-content class="w-56">
              <hlm-option value="Outlook" (click)="$event.preventDefault(); this.mailProvider = 'Outlook';" >
                <ng-icon hlm name="lucideTriangle" hlmMenuIcon />
                Outlook
              </hlm-option>
              <hlm-option value="Gmail" (click)="$event.preventDefault(); this.mailProvider = 'Gmail';" >
                <ng-icon hlm name="lucideSquareM" hlmMenuIcon />
                Gmail
              </hlm-option>
          </hlm-select-content>
        </brn-select>
      </hlm-menu-label>
      
      <hlm-menu-separator />

      <hlm-menu-group>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideInbox" hlmMenuIcon />
          <span>Inbox</span>
          <hlm-menu-shortcut>⇧⌘P</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideFile" hlmMenuIcon />
          <span>Drafts</span>
          <hlm-menu-shortcut>⌘B</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideSend" hlmMenuIcon />
          <span>Sent</span>
          <hlm-menu-shortcut>⌘S</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideArchiveX" hlmMenuIcon />
          <span>Junk</span>
          <hlm-menu-shortcut>⌘K</hlm-menu-shortcut>
        </button>
      </hlm-menu-group>

      <hlm-menu-group>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideTrash2" hlmMenuIcon />
          <span>Trash</span>
          <hlm-menu-shortcut>⌘B</hlm-menu-shortcut>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideArchive" hlmMenuIcon />
          <span>Archive</span>
          <hlm-menu-shortcut>⌘+T</hlm-menu-shortcut>
        </button>
      </hlm-menu-group>

      <hlm-menu-separator />

      <hlm-menu-group>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideUsers" hlmMenuIcon />
          <span>Social</span>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideCircleAlert" hlmMenuIcon />
          <span>Updates</span>
        </button>
        <button hlmMenuItem>
          <ng-icon hlm name="lucideMessagesSquare" hlmMenuIcon />
          <span>Forums</span>
        </button>
      </hlm-menu-group>

      <button hlmMenuItem>
        <ng-icon hlm name="lucideShoppingCart" hlmMenuIcon />
        <span>Shopping</span>
        <hlm-menu-shortcut>⇧⌘Q</hlm-menu-shortcut>
      </button>
      <button hlmMenuItem>
        <ng-icon hlm name="lucideArchive" hlmMenuIcon />
        <span>Promotions</span>
        <hlm-menu-shortcut>⇧⌘Q</hlm-menu-shortcut>
      </button>
    </hlm-menu>
  `,
})
export class EmailMenuComponent {

  mailProvider: 'Gmail' | 'Outlook' = "Gmail";
}
