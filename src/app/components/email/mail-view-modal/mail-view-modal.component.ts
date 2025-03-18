import { ChangeDetectorRef, Component, Input, OnChanges } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFullscreen } from '@ng-icons/lucide';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/brain/dialog';
import {
  HlmDialogComponent,
  HlmDialogContentComponent,
  HlmDialogHeaderComponent
} from '@spartan-ng/ui-dialog-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { EmailViewComponent } from '../../view/email-view/email-view.component';
import { GmailService } from '../../../services/google/gmail.service';
import { NgScrollbarModule } from 'ngx-scrollbar';

/**
 * 
 * Modal to view e-mail in full screen.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'mail-view-modal',
  imports: [
    BrnDialogContentDirective, 
    BrnDialogTriggerDirective,
    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmButtonDirective,
    HlmIconDirective,
    NgIcon,
    EmailViewComponent,
    NgScrollbarModule
  ],
  template: `
    <hlm-dialog>
      <button 
        size="icon"
        variant='ghost' 
        brnDialogTrigger 
        hlmBtn
        class="relative left-8"
      >
        <ng-icon 
          hlm 
          name="lucideFullscreen" 
        />
      </button>
      <hlm-dialog-content *brnDialogContent="let ctx">
        <hlm-dialog-header>
          <h3 brnDialogTitle hlm>See the e-mail</h3>
            @if (emailHtml != null) {
              <app-email-view
                #emailView 
                [emailHtml]="this.emailHtml" 
                class="flex justify-center" 
              />
            } @else {
              <p>Nada para renderizar</p>
            }
        </hlm-dialog-header>
      </hlm-dialog-content>
    </hlm-dialog>
  `,
  styles: ``,
  providers: [provideIcons({ lucideFullscreen })]
})
export class MailViewModalComponent implements OnChanges {

  @Input() emailId: string = '';
  
  emailHtml: string = '';

  constructor(private readonly gmailService: GmailService, private cdRef: ChangeDetectorRef) {}

  /**
   * 
   * On component changes, update IFrame. 
   */
  ngOnChanges(): void {  
    if (this.emailId) {
      this.updateIframeContent();
    }
  }

  /**
   * 
   * Function to update IFrame content.
   */
  async updateIframeContent() {
    // console.log('updated on modal');
    const data: string = await this.gmailService.getEmailHtml(this.emailId);
    this.emailHtml = data;    
    this.cdRef.detectChanges();
  }
}
