import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/brain/toggle';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'inbox-email-card',
  imports: [
    BrnSelectImports,
    HlmSelectImports,
    HlmToggleDirective,
    BrnToggleDirective,
    HlmFormFieldModule,
    HlmBadgeDirective
  ],
  template: `
    <button brnToggle hlm variant="outline" class="px-3 py-3 mt-3 w-full h-fit flex flex-col">
      <div class=" w-full flex justify-between">
        <p class="text-sm font-semibold">
          Accenture
        </p>
        <p class="font-medium text-xs">
          14 feb 2025
        </p>
      </div>
      <div class="w-full flex">
        <hlm-hint class="text-xs mt-1">
          This is your email address.
        </hlm-hint>
      </div>
      <div class="w-full mt-3 flex text-start">
        <hlm-hint 
          class="w-full text-xs mt-1 font-light" 
          style="
            word-break: break-word; 
            overflow-wrap: break-word; 
            white-space: normal; 
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga expedita voluptates consectetur temporibus corrupti nemo vel omnis ullam doloribus, distinctio aut nulla odit. Assumenda quia blanditiis nemo deleniti praesentium.
        </hlm-hint>
      </div>
      <div class="w-full mt-3 flex">
        <div hlmBadge variant="default" class="mr-2 rounded-md">
          meeting
        </div>
        <div hlmBadge variant="default" class="mr-2 rounded-md">
          work
        </div>
        <div hlmBadge variant="outline" class="mr-2 rounded-md">
          important
        </div>
      </div>
    </button>
  `,
  styles: ``
})
export class EmailCardComponent {

}
