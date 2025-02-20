import { Injectable } from '@angular/core';

/**
 * 
 * Google authentication service.
 * 
 * @author Marcus Nastasi
 * @version 1.0.1
 * @since 2025
 */
@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  /**
   * 
   * This method allows to save logged user information on storage. 
   */
  public async getUser(): Promise<void> {
    try {
      const response: Response = await fetch('http://localhost:8080/', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        localStorage.setItem('email_manager_user', await response.text());
      }
    } catch(e) {
      throw new Error();
    }
  }

  /**
   * 
   * This method allows to save logged user token on storage. 
   */
  public async getToken(): Promise<void> {
    try {
      const response: Response = await fetch('http://localhost:8080/token', {
        method: 'GET',
        credentials: 'include'
      });
      if (response.ok) {
        const data: { access_token: string } = await response.json();
        if (data.access_token === null) {
          throw new Error('Access token is null.');
        }
        localStorage.setItem('access_token', data.access_token);
      }
    } catch(e) {
      throw new Error();
    }
  }
}
