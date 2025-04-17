import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArchive,
  lucideArchiveX,
  lucideTrash2,
  lucideClock,
  lucideCornerUpLeft,
  lucideReplyAll,
  lucideForward,
  lucideEllipsisVertical
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
import { GmailService } from '../../../services/google/gmail.service';
import { AlertComponent } from '../../alert/alert.component';

/**
 * The e-mail view component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
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
    HlmSwitchComponent,
    NgIcon,
    AlertComponent
  ],
  providers: [
    provideIcons({
      lucideArchive,
      lucideArchiveX,
      lucideTrash2,
      lucideClock,
      lucideCornerUpLeft,
      lucideReplyAll,
      lucideForward,
      lucideEllipsisVertical
    }),
  ],
  template: `
    <hlm-menu class="w-full h-full border-0 border-r-2 rounded-none overflow-y-scroll custom-scroll">
      <div class="w-full flex justify-between p-3.5">
        <!--  -->
        <div class="flex items-center h-5 text-sm">
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Archive e-mails" 
                class="w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideArchive" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >
                Archive e-mails
              </span>
            </hlm-tooltip>
          </div>
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Move e-mails to junk" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideArchiveX" 
                  hlmMenuIcon 
                />
              </button>
              <span
                class="text-xs" 
                *brnTooltipContent
              >Move e-mails to junk</span>
            </hlm-tooltip>
          </div>
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Move e-mails to trash" 
                class=" w-fit h-7" 
                variant="ghost"
                (click)="openMoveToTrashAlert()"
              >
                <ng-icon 
                  hlm 
                  name="lucideTrash2" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Move e-mails to trash</span>
            </hlm-tooltip>
            <app-alert 
              #moveToTrashAlert 
              title="Are you sure?" 
              description="By doing this action, you cannot recover your e-mail."
              buttonText="Delete e-mail" 
              btnColor="destructive"
              (delete)="moveToTrash()"
              [loading]="loading"
            />
          </div>
          <brn-separator 
            decorative 
            hlmSeparator 
            orientation="vertical" 
          />
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Snoozer" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideClock" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Snoozer</span>
            </hlm-tooltip>
          </div>
        </div>
        <!--  -->
        <div class="flex items-center h-5 text-sm">
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Reply e-mails" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideCornerUpLeft" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Reply e-mails</span>
            </hlm-tooltip>
          </div>
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Reply all e-mails" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideReplyAll" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Reply all e-mails</span>
            </hlm-tooltip>
          </div>
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Forward" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideForward" 
                  hlmMenuIcon
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Forward</span>
            </hlm-tooltip>
          </div>
          <brn-separator 
            decorative 
            hlmSeparator 
            orientation="vertical" 
          />
          <div>
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Options" 
                class=" w-fit h-7" 
                variant="ghost"
              >
                <ng-icon 
                  hlm 
                  name="lucideEllipsisVertical" 
                  hlmMenuIcon 
                />
              </button>
              <span 
                class="text-xs" 
                *brnTooltipContent
              >Options</span>
            </hlm-tooltip>
          </div>
        </div>
      </div>
      <!--  -->
      <hlm-menu-separator />
      <!-- Title area -->
      <div class="w-full flex justify-between">
        <div class="w-fit flex flex-col p-2">
          <p class="text-sm font-semibold p-0.5" #fromP>
            {{ from.split(' ')[0] }}
          </p>
          <p class=" text-xs font-light p-0.5" #subjectP >
            {{ subject }}
          </p>
          <p class=" text-xs font-medium p-0.5" #fromP >
            reply-to: {{ from.split(' ')[1] }}
          </p>
        </div>
        <div class="w-fit flex flex-col p-2">
          <p class="text-xs font-extralight p-1" #dateP >
            {{ date }}
          </p>
          <!-- <div class=" self-baseline mt-3">
            <mail-view-modal [emailId]="this.emailId"/>
          </div> -->
        </div>
      </div>
      <!--  -->
      <hlm-menu-separator />
      <!-- Email view area -->
      <ng-scrollbar 
        hlm 
        class="w-full pb-2 px-4 flex flex-col justify-center rounded-md" 
        style="max-height: 60vh;"
      >
        <app-email-view 
          #emailView 
          [emailHtml]="emailHtml" 
          class="flex justify-center" 
        />
      </ng-scrollbar>
      <hlm-menu-separator />
      <ng-scrollbar 
        hlm 
        class="w-full flex" 
        style="height: fit-content;"
      >
        <hlm-menu-group class="px-3">
          <!-- Reply area -->
          <div class=" mt-3">
            <textarea 
              hlmInput 
              placeholder="Type your message here." 
              class="w-full h-20 search-input"
            ></textarea>
          </div>
          <!-- Buttons area -->
          <div class=" w-full flex justify-between items-center mt-4">
            <hlm-tooltip>
              <button 
                hlmBtn 
                hlmTooltipTrigger 
                aria-describedby="Mute this thread" 
                class=" w-fit h-7 mx-1" 
                variant="link"
              >
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

    .custom-scroll {
      width: full;
      height: full;
      overflow-y: scroll;
    }

    .custom-scroll::-webkit-scrollbar {
      width: 3px;
    }

    .custom-scroll::-webkit-scrollbar-track {
      background-color: #f1f1f1;
    }

    .custom-scroll::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 1px;
    }

    .custom-scroll::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
  `
})
export class MailViewComponent implements OnChanges {

  constructor(private readonly gmailService: GmailService) {}

  @Input() emailId: string = '';
  @Input() from: string = '';
  @Input() subject: string = '';
  @Input() date: string = '';

  @Output() refresh = new EventEmitter<void>();

  emailHtml: string = '';
  loading: boolean = false;
  
  @ViewChild('emailView', { static: false }) emailView!: ElementRef;
  @ViewChild('fromP', { static: false }) fromP!: ElementRef;
  @ViewChild('subjectP', { static: false }) subjectP!: ElementRef;
  @ViewChild('dateP', { static: false }) dateP!: ElementRef;
  @ViewChild('moveToTrashAlert', { static: false }) moveToTrashAlert!: AlertComponent;

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
   * Call alert component
   */
  protected openMoveToTrashAlert() {
    if (this.moveToTrashAlert) {
      this.moveToTrashAlert.openDialog(); // Chama o método do AlertComponent
    }
  }

  /**
   * 
   * Function to update IFrame content.
   */
  public async updateIframeContent(): Promise<void> {
    const data = await this.gmailService.getEmailHtml(this.emailId);
    this.emailHtml = data;
  }

  public async moveToTrash() {
    this.loading = true;
    const data: string = await this.gmailService.moveToTrash(this.emailId);
    if (data) {
      this.moveToTrashAlert.closeDialog();
      this.refresh.emit();
    }
    this.loading = false;
  }

  /**
   * 
   */
  public async deleteEmail() {
    console.log(this.emailId);
  }
}
