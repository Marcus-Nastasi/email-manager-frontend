import { Injectable } from '@angular/core';

/**
 * 
 * The gmail service.
 * 
 */
@Injectable({ providedIn: 'root' })
export class GmailService {

  /**
   * 
   * This function allows to get single e-mails htmls by e-mail id.
   * 
   * @param id the e-mail id.
   * @returns the html string.
   */
  async getEmailById(id: string): Promise<string> {
    try {
      const response: Response = await fetch(`http://localhost:8080/gmail/find/email/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === 500) {
        window.open('/login', '_self');
        throw new Error();
      }
      const data: string = await response.text();
      return data;
    } catch(e) {
      console.error(e);
      return '';
    }
  }
}
