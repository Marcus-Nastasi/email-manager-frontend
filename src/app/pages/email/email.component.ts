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
    <main class="mt-12 p-2">
      <section 
        hlmCard 
        class="flex w-full" 
        style="height: 92.5vh;"
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

  protected emailId: string = '';
  protected selectedEmailData = { from: '', subject: '', date: '' };
  protected emailCardData: EmailCardResponse[] = [];
  protected nextPageToken: string | undefined = '';

  /**
   * 
   * On component initialization, run the function to get the first e-mails list.
   */
  ngOnInit(): void {
    this.getEmailsCardData();
  }

  /**
   * 
   * @param emailId
   */
  private updateEmailId(emailId: string): void {
    this.emailId = emailId;
  }

  /**
   * 
   * @param data 
   */
  private updateEmailCardData(data: EmailCardResponse): void {
    this.emailCardData.push(data);
  }

  /**
   * 
   * @param token 
   */
  private updateNextPageToken(token: string | undefined): void {
    this.nextPageToken = token;
  }

  /**
   * 
   * @param id 
   */
  private async getEmailById(id: string): Promise<void> {
    const response: string = await this.gmailService.getEmailById(id);
    const data: EmailCardResponse = JSON.parse(response);
    data.date = data.date.split(',')[1].trim().substring(0, 11);
    if (this.emailId == '') {
      this.updateEmailId(data.id);
    }
    this.updateEmailCardData(data);
    if (this.emailId == this.emailCardData[0].id) {
      this.selectedEmailData = {
        from: this.emailCardData[0].from,
        subject: this.emailCardData[0].subject,
        date: this.emailCardData[0].date
      }
    }
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
  public async getEmailsCardData(): Promise<void> {
    const idsList: string[] = await this.gmailService.getEmailsList(10, this.nextPageToken);
    if (idsList.length < 11) return;
    const nextPageTkn: string | undefined = idsList.pop();
    this.updateNextPageToken(nextPageTkn);
    idsList.forEach(async (id: string) => {
      this.getEmailById(id);
      // const response: string = await this.gmailService.getEmailById(id);
      // const data: EmailCardResponse = JSON.parse(response);
      // data.date = data.date.split(',')[1].trim().substring(0, 11);
      // if (this.emailId == '') {
      //   this.emailId = data.id;
      // }
      // this.updateEmailCardData(data);
      // if (this.emailId == this.emailCardData[0].id) {
      //   this.selectedEmailData = {
      //     from: this.emailCardData[0].from,
      //     subject: this.emailCardData[0].subject,
      //     date: this.emailCardData[0].date
      //   }
      // }
    });
  }
}
