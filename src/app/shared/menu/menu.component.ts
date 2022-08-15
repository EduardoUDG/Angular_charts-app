import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { path: '/graphs/bar',        text: 'Bar' },
    { path: '/graphs/bar-double', text: 'Bar double' },
    { path: '/graphs/dona',       text: 'Dona' },
    { path: '/graphs/dona-http',  text: 'Dona http' },
  ];

}
