import { Routes } from '@angular/router';
import { InviteComponent } from './invite/invite.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  {
    path: "",
    component: InviteComponent
  },
  {
    path: "viagem-dos-sonhos",
    component: PaymentComponent
  }
];
