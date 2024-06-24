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

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
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
