import { Component, OnInit } from '@angular/core';
import { MainMenuItem } from './mainmenuitem'
import { MainMenuService } from './mainmenu.service';

@Component({
    selector: 'mainmenu',
    templateUrl: 'mainmenu.component.html'
})

export class MainMenuComponent implements OnInit {
    constructor(private mainMenuService: MainMenuService) { }
    menuItems: MainMenuItem[];
    ngOnInit() { }
}
