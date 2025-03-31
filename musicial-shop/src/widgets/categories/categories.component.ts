import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { categoriesCards } from '../../utils/constants/categories.constants';
import { CategoryCardComponent } from '../category-card/category-card.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    CategoryCardComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
   _categoriesCards = categoriesCards;

}
