import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'spartan-button-preview',
  standalone: true,
  imports: [HlmButtonDirective],
  template: ` <button hlmBtn>Send</button> `,
})
export class ButtonPreviewComponent {}
