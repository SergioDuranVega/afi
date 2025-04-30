import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './resta.component.html',
  styleUrl: './resta.component.css'
})

export class RestaComponent {
  a: number = 0;
  b: number = 0;

  get total(): number {
    return (this.a || 0) - (this.b || 0);
  }
}

