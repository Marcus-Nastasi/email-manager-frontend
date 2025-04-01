import { Injectable } from '@angular/core';

/**
 * The gmail service.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Injectable({ 
  providedIn: 'root' 
})
export class GmailService {

  /**
   * This function allows to get a list of strings that are the e-mail ids and page token.
   * 
   * @param maxResults the max number of e-mails returned.
   * @param pageToken the token that reffers the next page.
   * 
   * @returns a list of strings. 
   */
  async getEmailsList(maxResults: number = 7, pageToken: string = ''): Promise<string[]> {
    try {
      const response: Response = await fetch(
        `http://localhost:8080/gmail/find/email?maxResults=${maxResults}&pageToken=${pageToken}`, 
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (response.status === 500) {
        window.open('/login', '_self');
        throw new Error();
      }
      const data: string[] = await response.json();
      return data;
    } catch(e) {
      console.error(e);
      return [''];
    }
  }

  /**
   * This function allows to get single e-mails data by id.
   * 
   * @param id the e-mail id.
   * 
   * @returns the data from e-mail string.
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

  /**
   * This function allows to get single e-mails htmls by e-mail id.
   * 
   * @param id the e-mail id.
   * 
   * @returns the html string.
   */
  async getEmailHtml(id: string): Promise<string> {
    try {
      const response: Response = await fetch(`http://localhost:8080/gmail/find/email/html/${id}`, {
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

  public async moveToTrash(id: string): Promise<string> {
    try {
      const response: Response = await fetch(`http://localhost:8080/gmail/trash/email/${id}`, {
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
