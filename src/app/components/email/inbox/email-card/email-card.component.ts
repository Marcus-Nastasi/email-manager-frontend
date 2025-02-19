import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    <button 
      brnToggle
      hlm 
      variant="outline" 
      class="px-3 py-3 mt-3 w-full h-fit flex flex-col"
      (click)="selectEmail();"
    >
      <div class=" w-full flex justify-between">
        <p class="text-sm font-semibold">
          {{ title.split(' ')[0] }}
        <p class="font-medium text-xs">
          {{ date }}
        </p>
      </div>
      <div class="w-full flex">
        <hlm-hint 
          class="text-xs mt-1"
          style="
            word-break: break-word; 
            overflow-wrap: break-word; 
            white-space: normal; 
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
          "
        >
          {{ subject }}
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
          {{ content }}
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

  @Input() id: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() subject: string = '';
  @Input() content: string = '';

  @Output() emailSelected = new EventEmitter<string>();

  constructor() {}

  selectEmail() {
    this.emailSelected.emit(this.id);
  }
}
