import { Component, Input, OnInit } from '@angular/core';
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
import {
  HlmMenuComponent,
  HlmMenuGroupComponent,
  HlmMenuSeparatorComponent,
} from '@spartan-ng/ui-menu-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/brain/tooltip';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@spartan-ng/ui-tooltip-helm';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/brain/separator';
import { EmailViewComponent } from "../../view/email-view/email-view.component";
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';

@Component({
  selector: 'mail-view',
  standalone: true,
  imports: [
    HlmFormFieldModule,
    HlmMenuComponent,
    HlmMenuSeparatorComponent,
    HlmMenuGroupComponent,
    BrnSelectImports,
    HlmSelectImports,
    HlmInputDirective,
    NgScrollbarModule,
    HlmButtonDirective,
    BrnTooltipContentDirective,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    EmailViewComponent,
    HlmSwitchComponent
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
          <p class="text-xs font-extralight p-1">
            Oct 22 2023, 09:00:00 AM
          </p>
        </div>
      </div>

      <!--  -->
      <hlm-menu-separator />

      <!-- Email view area -->
      <ng-scrollbar hlm class="w-full pb-2 px-4 flex flex-col justify-center rounded-md" style="max-height: 60vh;">
        <app-email-view [emailHtml]="emailHtml" class="flex justify-center" />
      </ng-scrollbar>

      <hlm-menu-separator />

      <ng-scrollbar hlm class="w-full flex overflow-y-scroll">
        <hlm-menu-group class="px-3">
          <!-- Reply area -->
          <div class=" mt-3">
            <textarea hlmInput placeholder="Type your message here." class="w-full h-20"></textarea>
          </div>

          <div class=" w-full flex justify-between items-center mt-4">
            <hlm-tooltip>
              <button hlmBtn hlmTooltipTrigger aria-describedby="Mute this thread" class=" w-fit h-7 mx-1" variant="link">
                <hlm-switch />
              </button>
              <span class="text-xs" *brnTooltipContent>Mute this thread</span>
            </hlm-tooltip>
            <button hlmBtn class="px-3 h-8 text-xs">Send</button>
          </div>
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
export class MailViewComponent implements OnInit {

  constructor() {}

  @Input() emailHtml: string = '';

  ngOnInit(): void {}
}
