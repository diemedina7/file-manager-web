import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  imports: [
    RouterOutlet,
    MainPageComponent
  ]
})
export class AppComponent {
  title = 'file-manager-page';
}
