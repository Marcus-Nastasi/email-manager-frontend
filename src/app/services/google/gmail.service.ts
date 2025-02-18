import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GmailService {

  async getEmailById(id: string): Promise<string> {
    try {
      const response: Response = await fetch(`http://localhost:8080/gmail/find/email/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data: string = await response.text();
      return data;
    } catch(e) {
      console.error(e);
      return '';
    }
  }
}
