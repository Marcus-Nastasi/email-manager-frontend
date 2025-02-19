import { Component, OnInit } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { EmailMenuComponent } from "../../components/email/menu/menu.component";
import { EmailInboxComponent } from '../../components/email/inbox/inbox.component';
import { MailViewComponent } from "../../components/email/mail-view/mail-view.component";
import { GmailService } from '../../services/google/gmail.service';
import { EmailCardResponse } from '../../model/gmail/email-card-response';
import { isDataSource } from '@angular/cdk/collections';

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
        <email-inbox-component class="h-1vh w-2/5" />
        <mail-view 
          [emailHtml]="emailHtml" 
          class="h-1vh w-full" 
        />
      </section>
    </main>
  `
})
export class EmailComponent implements OnInit {

  constructor(private readonly gmailService: GmailService) {}

  emailHtml: string = '';
  emailCardData: EmailCardResponse[] = [];
  nextPageToken: string = '';

  ngOnInit(): void {
    this.getEmailsCardData();
  }

  /**
   * 
   * get email data by id.
   *  
   */
  async getEmailsCardData(): Promise<void> {
    const idsList: string[] = await this.gmailService.getEmailsList(10, this.nextPageToken);
    const nextPageTkn: string | undefined = idsList.pop();

    if (nextPageTkn == undefined) {
      throw new Error();
    }

    this.nextPageToken = nextPageTkn;
    
    for (let d of idsList) {
      const response: string = await this.gmailService.getEmailById(d);
      const data: EmailCardResponse = JSON.parse(response) as EmailCardResponse;
      this.emailCardData.push(data);
    }
    
    console.log(this.emailCardData);
  }
}
