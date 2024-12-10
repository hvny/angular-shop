import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
@Component({
  selector: 'app-items-container',
  standalone: true,
  imports: [
    ItemCardComponent,
  ],
  templateUrl: './items-container.component.html',
  styleUrl: './items-container.component.css'
})
export class ItemsContainerComponent {

}
