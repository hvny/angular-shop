import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CategoriesComponent } from './categories/categories.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CategoriesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent {
  onButtonClick() {
    console.log('Кнопка была нажата!');
    // Дополнительные действия при клике
  }
}
