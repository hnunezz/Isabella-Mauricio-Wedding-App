import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  navigateTo() {
    this.router.navigate(['/']);
  }
}
