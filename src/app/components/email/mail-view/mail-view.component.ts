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
  HlmMenuSeparatorComponent,
} from '@spartan-ng/ui-menu-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { HlmTabsComponent, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { EmailCardComponent } from '../inbox/email-card/email-card.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';

@Component({
  selector: 'mail-view',
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
    EmailCardComponent,
    NgScrollbarModule,
    HlmButtonDirective,
    HlmSpinnerComponent,
    BrnTooltipContentDirective,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent
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
      <div class="w-full flex justify-between p-3.5">

        <!--  -->
        <div class="flex items-center h-5 text-sm">
          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Hello world" class=" w-fit h-7 mx-1" variant="ghost">
                A
              </button>
              <span class="text-xs" *brnTooltipContent>Archive e-mails</span>
            </hlm-tooltip>
          </div>
          
          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Move e-mails to junk" class=" w-fit h-7 mx-1" variant="ghost">
                J
              </button>
              <span class="text-xs" *brnTooltipContent>Move e-mails to junk</span>
            </hlm-tooltip>
          </div>

          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Move e-mails to trash" class=" w-fit h-7 mx-1" variant="ghost">
                T
              </button>
              <span class="text-xs" *brnTooltipContent>Move e-mails to trash</span>
            </hlm-tooltip>
          </div>
          
          <brn-separator decorative hlmSeparator orientation="vertical" />

          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Snoozer" class=" w-fit h-7 mx-1" variant="ghost">
                S
              </button>
              <span class="text-xs" *brnTooltipContent>Snoozer</span>
            </hlm-tooltip>
          </div>
        </div>

        <!--  -->
        <div class="flex items-center h-5 text-sm">
          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Reply e-mails" class=" w-fit h-7 mx-1" variant="ghost">
                R
              </button>
              <span class="text-xs" *brnTooltipContent>Reply e-mails</span>
            </hlm-tooltip>
          </div>
          
          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Reply all e-mails" class=" w-fit h-7 mx-1" variant="ghost">
                RA
              </button>
              <span class="text-xs" *brnTooltipContent>Reply all e-mails</span>
            </hlm-tooltip>
          </div>

          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Forward" class=" w-fit h-7 mx-1" variant="ghost">
                F
              </button>
              <span class="text-xs" *brnTooltipContent>Forward</span>
            </hlm-tooltip>
          </div>
          
          <brn-separator decorative hlmSeparator orientation="vertical" />

          <div>
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Options" class=" w-fit h-7 mx-1" variant="ghost">
                :
              </button>
              <span class="text-xs" *brnTooltipContent>Options</span>
            </hlm-tooltip>
          </div>
        </div>
      </div>

      <!--  -->
      <hlm-menu-separator />

      <!--  -->
      <div class="w-full flex justify-between">
        <div class="w-fit flex flex-col p-2">
          <p class="text-sm font-semibold p-0.5">
            William Smith
          </p>
          <p class=" text-xs font-light p-0.5">
            Meeting tomorrow
          </p>
          <p class=" text-xs font-medium p-0.5">
            reply-to: william
          </p>
        </div>

        <div class="w-fit flex flex-col p-2">
          <p class="text-xs font-light p-1">
            Oct 22 2023, 09:00:00 AM
          </p>
        </div>
      </div>

      <!--  -->
      <hlm-menu-separator />

      <!--  -->
      <ng-scrollbar hlm class="w-full rounded-md" style="max-height: 75vh;">
        <hlm-menu-group class="px-2">
          <!-- Inbox card -->

            <inbox-email-card 
              [title]="'Accenture'" 
              [date]="'15 feb 2025'"
              [subject]="'Metting'" 
              [content]="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita voluptates consectetur temporibus corrupti nemo vel omnis ullam doloribus, distinctio aut nulla odit. Assumenda quia blanditiis nemo deleniti praesentium.'" 
            />

            <inbox-email-card 
              [title]="'j.rolemberg@outlook'" 
              [date]="'08 feb 2025'"
              [subject]="'Anúncio da OLX.'" 
              [content]="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita voluptates consectetur temporibus corrupti nemo vel omnis ullam doloribus, distinctio aut nulla odit. Assumenda quia blanditiis nemo deleniti praesentium.'" 
            />

            <inbox-email-card 
              [title]="'Amazon'" 
              [date]="'06 feb 2025'"
              [subject]="'Amazon Prime Music!'" 
              [content]="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita voluptates consectetur temporibus corrupti nemo vel omnis ullam doloribus, distinctio aut nulla odit. Assumenda quia blanditiis nemo deleniti praesentium.'" 
            />

          <inbox-email-card 
            [title]="'Google Ads'" 
            [date]="'06 feb 2025'"
            [subject]="'Your google ads repo gateway needs to be refactored!'" 
            [content]="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita voluptates consectetur temporibus corrupti nemo vel omnis ullam doloribus, distinctio aut nulla odit. Assumenda quia blanditiis nemo deleniti praesentium.'" 
          />

        </hlm-menu-group>
      </ng-scrollbar>

    </hlm-menu>
  `,
  styles: `
    .search-input:focus {
      border: 0.1px solid rgb(200, 200, 200);
      box-shadow: 0px 0px 1.7px 0.01px;
    }
  `
})
export class MailViewComponent {}
