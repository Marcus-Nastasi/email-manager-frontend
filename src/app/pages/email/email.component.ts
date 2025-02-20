import { Component, OnInit } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { EmailMenuComponent } from "../../components/email/menu/menu.component";
import { EmailInboxComponent } from '../../components/email/inbox/inbox.component';
import { MailViewComponent } from "../../components/email/mail-view/mail-view.component";
import { GmailService } from '../../services/google/gmail.service';
import { EmailCardResponse } from '../../model/gmail/email-card-response';

/**
 * 
 * This component is the full e-mail ('/') page.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'app-email',
  imports: [
    HlmCardDirective,
    EmailMenuComponent,
    EmailInboxComponent,
    MailViewComponent
  ],
  template: `
    <main class="mt-14 p-2">
      <section 
        hlmCard 
        class="flex w-full" 
        style="height: 90vh;"
      >
        <email-menu-component class="h-1vh w-1/5" />
        <email-inbox-component 
          [emailId]="emailId"
          [emailsCardData]="emailCardData"
          (emailIdChanged)="updateSelectedEmail($event)"
          (loadMoreEmails)="getEmailsCardData()"
          class="h-1vh w-2/5" 
        />
        <mail-view 
          [emailId]="emailId"
          [from]="selectedEmailData.from"
          [subject]="selectedEmailData.subject"
          [date]="selectedEmailData.date"
          class="h-1vh w-full" 
        />
      </section>
    </main>
  `
})
export class EmailComponent implements OnInit {

  /**
   * @param gmailService Uses the Gmail Service to make API calls. 
   */
  constructor(private readonly gmailService: GmailService) {}

  emailId: string = '';
  selectedEmailData = { from: '', subject: '', date: '' };
  emailCardData: EmailCardResponse[] = [];
  nextPageToken: string | undefined = '';

  /**
   * 
   * On component initialization, run the function to get the first e-mails list.
   */
  ngOnInit(): void {
    this.getEmailsCardData();
  }

  /**
   * 
   * This function allows to update the selected e-mail id for the 
   * renderization on mail view component.
   * 
   * @param newValue the new e-mail id.
   */
  public updateSelectedEmail(newValue: string): void {
    if (newValue && this.emailId !== newValue) {
      this.emailId = newValue;
      this.emailCardData.forEach((cd: EmailCardResponse) => {
        if (cd.id === this.emailId) {
          this.selectedEmailData = {
            from: cd.from,
            subject: cd.subject,
            date: cd.date
          }
        }
      });
    }
  }

  /**
   * 
   * This function allows to construct the emails card data object.
   * It uses the e-mails id's list to loop over and get the e-mails.
   */
  async getEmailsCardData(): Promise<void> {
    const idsList: string[] = await this.gmailService.getEmailsList(10, this.nextPageToken);
    const nextPageTkn: string | undefined = idsList.pop();
    this.nextPageToken = nextPageTkn;
    idsList.forEach(async (d: string) => {
      const response: string = await this.gmailService.getEmailById(d);
      const data: EmailCardResponse = JSON.parse(response);
      data.date = data.date.split(',')[1].trim().substring(0, 11);
      if (this.emailId == '') {
        this.emailId = data.id;
      }
      this.emailCardData.push(data);
      if (this.emailId == this.emailCardData[0].id) {
        this.selectedEmailData = {
          from: this.emailCardData[0].from,
          subject: this.emailCardData[0].subject,
          date: this.emailCardData[0].date
        }
      }
    });
  }
}
