import { Routes } from '@angular/router';
import { EmailComponent } from './pages/email/email.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: EmailComponent
  }
];
