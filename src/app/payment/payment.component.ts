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
  showModal: boolean = false;
  activePix: boolean = false;
  activeCard: boolean = false;
  showClipboardConfirm: boolean = false;

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  navigateTo() {
    this.router.navigate(['/']);
  }

  setActive(t: 'card' | 'pix') {
    if (t === 'card') {
      this.activeCard = !this.activeCard
      this.activePix = false
    } else {
      this.activePix = !this.activePix
      this.activeCard = false
    }
  }

  copyPix(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => this.showClipboardConfirm = true)

    setTimeout(() => {
      this.showClipboardConfirm = false;
    }, 500);
  }
}
