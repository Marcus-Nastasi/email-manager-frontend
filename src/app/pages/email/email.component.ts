import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { EmailMenuComponent } from "../../components/email/menu/menu.component";
import { EmailInboxComponent } from '../../components/email/inbox/inbox.component';
import { MailViewComponent } from "../../components/email/mail-view/mail-view.component";

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
export class EmailComponent {}
