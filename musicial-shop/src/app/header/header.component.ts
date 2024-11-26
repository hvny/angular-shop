import { Component, OnInit  } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    TabMenuModule, 
    CommonModule,
    MegaMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: MenuItem[] | undefined;
  megaMenuItems: MegaMenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.menuItems = [
      { label: 'Главная', route: '/home' }, 
      { label: 'Товары', route: '/items' }, 
      { label: 'Доставка', route: '/delivery' },
      { label: 'Акции', route: '/events' },
      // { label: 'Профиль', route: '/profile' },
    ];

    this.megaMenuItems = [
      {
        label: "Винил",
        items: [
          [
              {
                  label: 'Жанр',
                  items: [{ label: 'Панк' }, { label: 'Хип-хоп' }, { label: 'Метал' }, { label: 'Классика' }]
              }
          ]
        ]
      },
      {
        label: "Кассеты",
        items: [
          [
              {
                  label: 'Жанр',
                  items: [{ label: 'Панк' }, { label: 'Хип-хоп' }, { label: 'Метал' }, { label: 'Классика' }]
              }
          ]
        ]
      },
      {
        label: "Прогрыватели",
        items: [
          [
              {
                  label: 'Тип',
                  items: [{ label: 'Винил' }, { label: 'Кассеты' }]
              }
          ]
        ]
      }
    ]
  }

}