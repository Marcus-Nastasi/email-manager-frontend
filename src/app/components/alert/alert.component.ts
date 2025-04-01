import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from '@spartan-ng/brain/alert-dialog';
import {
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/ui-alertdialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-alert',
  imports: [
    BrnAlertDialogContentDirective, 
    BrnAlertDialogTriggerDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogContentComponent,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogTitleDirective,
    HlmButtonDirective
  ],
  template: `
    <hlm-alert-dialog #alertDialog>
      <button #triggerButton brnAlertDialogTrigger hidden></button>
      <hlm-alert-dialog-content *brnAlertDialogContent='let ctx'>
        <hlm-alert-dialog-header>
          <h3 hlmAlertDialogTitle>{{ title }}</h3>
          <p hlmAlertDialogDescription>
            {{ description }}
          </p>
        </hlm-alert-dialog-header>
        <hlm-alert-dialog-footer>
          <button 
            #closeBtn
            hlmBtn 
            variant="ghost" 
            size="sm" 
            (click)='ctx.close()'
          >Cancel</button>
          <button 
            hlmBtn 
            [variant]="btnColor"
            size="sm" 
            (click)='delete.emit()'
          >{{ buttonText }}</button>
        </hlm-alert-dialog-footer>
      </hlm-alert-dialog-content>
    </hlm-alert-dialog>
  `
})
export class AlertComponent {

  @Input('title') title: string = '';
  @Input('description') description: string = '';
  @Input('buttonText') buttonText: string = '';
  @Input('btnColor') btnColor: 'default' | 'secondary' | 'ghost' | 'destructive' = 'default';

  @Output() delete = new EventEmitter<void>();

  @ViewChild('triggerButton', { static: false }) triggerButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('closeBtn', { static: false }) closeBtn!: ElementRef<HTMLButtonElement>;

  openDialog() {
    if (this.triggerButton) {
      this.triggerButton.nativeElement.click();
    }
  }

  closeDialog() {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.click();
    }
  }
}
