import { Component, OnInit } from '@angular/core';

const MENUITEMAS: MainMenuItem[] = [
    { displayName:'Futures and Options', dashboardId: 123 },
    { displayName: 'OTC', dashboardId: 145 }];

@Component({
    selector: 'mainmenu',
    templateUrl: 'mainmenu.component.html'
})

export class MainMenuItem {
    displayName: string; 
    dashboardId: number;
}


export class MainMenu implements OnInit {
    constructor() { }
    
    menuItems = MENUITEMAS;

    ngOnInit() { }
}
