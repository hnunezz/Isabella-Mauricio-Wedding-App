import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss'
})
export class InviteComponent {
  private router = inject(Router);

  showClipboardConfirm: boolean = false;
  teste: boolean = false;
  isWeddingsDay: boolean = false;

  daysRemaining: number = 0

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getDaysRemaining()

    if (!localStorage.getItem("viewed-info")) {
      setTimeout(() => {
        this.teste = true
      }, 1000);
      setTimeout(() => {
        localStorage.setItem("viewed-info", "true")
        this.teste = false
      }, 5000);
    }
  }

  private getDaysRemaining() {
    const actualDate = new Date();
    const finalDate = new Date('2024-08-17T15:00:48Z')

    const timeReimaining = finalDate.getTime() - actualDate.getTime();

    const daysRemaining = Math.floor(timeReimaining / (1000 * 60 * 60 * 24))

    if (daysRemaining === 0) {
      this.isWeddingsDay = true
    }

    this.daysRemaining = daysRemaining
  }

  copy() {
    navigator.clipboard
      .writeText('R. Lázaro Bueno Oliveira, 92 - Centro, Guarulhos - SP, 07110-160')
      .then(() => this.showClipboardConfirm = true)

    setTimeout(() => {
      this.showClipboardConfirm = false;
    }, 500);
  }

  navigateTo() {
    this.router.navigate(['viagem-dos-sonhos']);
  }

}
