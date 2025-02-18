import { Component } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { EmailMenuComponent } from "../../components/email/menu/menu.component";

@Component({
  selector: 'app-email',
  imports: [
    HlmCardDirective,
    EmailMenuComponent
],
  templateUrl: './email.component.html'
})
export class EmailComponent {

}
