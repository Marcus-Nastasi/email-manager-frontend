import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BrnAlertDialogContentDirective, BrnAlertDialogTriggerDirective } from '@spartan-ng/brain/alert-dialog';
import {
  HlmAlertDialogActionButtonDirective,
  HlmAlertDialogCancelButtonDirective,
  HlmAlertDialogComponent,
  HlmAlertDialogContentComponent,
  HlmAlertDialogDescriptionDirective,
  HlmAlertDialogFooterComponent,
  HlmAlertDialogHeaderComponent,
  HlmAlertDialogOverlayDirective,
  HlmAlertDialogTitleDirective,
} from '@spartan-ng/ui-alertdialog-helm';

@Component({
  selector: 'app-alert',
  imports: [
    BrnAlertDialogContentDirective, 
    BrnAlertDialogTriggerDirective,
    HlmAlertDialogActionButtonDirective,
    HlmAlertDialogCancelButtonDirective,
    HlmAlertDialogComponent,
    HlmAlertDialogContentComponent,
    HlmAlertDialogDescriptionDirective,
    HlmAlertDialogFooterComponent,
    HlmAlertDialogHeaderComponent,
    HlmAlertDialogOverlayDirective,
    HlmAlertDialogTitleDirective,
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
          <button hlmAlertDialogCancel (click)='ctx.close()'>Cancel</button>
          <button hlmAlertDialogAction (click)='ctx.close()'>{{ buttonText }}</button>
        </hlm-alert-dialog-footer>
      </hlm-alert-dialog-content>
    </hlm-alert-dialog>
  `
})
export class AlertComponent {

  @Input('title') title: string = '';
  @Input('description') description: string = '';
  @Input('buttonText') buttonText: string = '';

  @ViewChild('triggerButton', { static: false }) triggerButton!: ElementRef<HTMLButtonElement>;

  openDialog() {
    if (this.triggerButton) {
      // Simula um clique no botão que abre o modal
      this.triggerButton.nativeElement.click();
    }
  }
}
