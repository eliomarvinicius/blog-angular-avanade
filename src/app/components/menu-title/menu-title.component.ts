import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css','menu-title.responsivo.component.css' ]
})
export class MenuTitleComponent {

    @Input()
    menuTitle:string=""
    
}
