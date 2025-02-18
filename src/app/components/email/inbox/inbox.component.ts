import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';
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
import { EmailCardComponent } from './email-card/email-card.component';
import { NgScrollbarModule } from 'ngx-scrollbar';

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
    EmailCardComponent,
    NgScrollbarModule,
    NgIcon
  ],
  providers: [
    provideIcons({ lucideSearch }),
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
        <ng-icon hlm name="lucideSearch" hlmMenuIcon size="sm" class="inline-flex mx-1" />
        <input
          type="text"
          hlmInput
          size="sm"
          placeholder="Search"
          class="w-full h-8 mt-0.5 focus-visible:ring-transparent search-input"
        />
      </div>
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

          <inbox-email-card 
            [title]="'Google Ads'" 
            [date]="'06 feb 2025'"
            [subject]="'Your google ads repo gateway needs to be refactored!'" 
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
export class EmailInboxComponent {}
