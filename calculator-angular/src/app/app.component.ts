import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcKeyboardComponent } from './calc-keyboard/calc-keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcKeyboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-angular';
}
