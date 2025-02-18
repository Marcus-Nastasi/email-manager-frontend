import { Component, OnInit } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { EmailMenuComponent } from "../../components/email/menu/menu.component";
import { EmailInboxComponent } from '../../components/email/inbox/inbox.component';
import { MailViewComponent } from "../../components/email/mail-view/mail-view.component";
import { GmailService } from '../../services/google/gmail.service';

@Component({
  selector: 'app-email',
  imports: [
    HlmCardDirective,
    EmailMenuComponent,
    EmailInboxComponent,
    MailViewComponent
],
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  constructor(private readonly gmailService: GmailService) {}

  emailHtml: string = '';

  ngOnInit(): void {
    this.getEmailById();
  }

  /**
   * 
   * get email data by id.
   *  
   */
  async getEmailById(): Promise<void> {
    const response = await this.gmailService.getEmailById('195197ffbb692158');
    this.emailHtml = response;
  }
}
