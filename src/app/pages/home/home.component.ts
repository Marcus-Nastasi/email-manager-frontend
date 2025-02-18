import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmDatePickerComponent } from '@spartan-ng/ui-datepicker-helm';
import { HlmH1Directive } from '@spartan-ng/ui-typography-helm';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
import { FormsModule } from '@angular/forms';

/**
 * 
 * Home component.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    HlmButtonDirective,
    HlmInputDirective,
    HlmDatePickerComponent,
    HlmH1Directive,
    HlmCardDirective,
    HlmLabelDirective,
    BrnSelectImports,
    HlmSelectImports
],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  // State variables
  input_name: string = '';
  email: string = '';
  isGay: string | null = null;
  birth: string | null = null;
  file: File | null = null;
  data = '';

  /**
   * 
   * Updating the name input when key is up.
   * 
   * @param $event the input event.
   */
  updateName($event: Event): void {
    this.input_name = ($event.target as HTMLInputElement).value;
  }

  /**
   * 
   * Updating the email input when key is up.
   * 
   * @param $event the email event.
   */
  updateEmail($event: Event): void {
    this.email = ($event.target as HTMLInputElement).value;
  }

  /**
   * 
   * Updating date when changed.
   * 
   * @param $event the date change event.
   */
  changeDate($event: Date): void {
    const isoDateString: string = $event.toISOString();
    this.birth = isoDateString.substring(0, isoDateString.indexOf('T'));
  }

  /**
   * 
   * Send form.
   * 
   * @param $event form sent event. 
   */
  async send($event: Event): Promise<void> {
    $event.preventDefault();
    const response = await this.getEmailById('194f5d9793d2c767');
    console.log(response);
  }

  async getEmailById(id: string) {
    // await this.getToken();
    // await this.getUser();
    return ;
    // const res = await fetch(`http://localhost:8080/gmail/find/email/${id}`, {
    //   method: 'GET',
    //   credentials: 'include',
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // });
    // const data = res.text();
    // return data;
  }
}
