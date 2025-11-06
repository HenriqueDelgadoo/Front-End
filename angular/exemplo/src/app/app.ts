import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './produtos/produtos.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1º ');
}
