import { Injectable } from '@angular/core';
import { MainMenuItem } from './mainmenuitem';
import { MENUITEMS } from './mockmenuitems';


@Injectable()
export class MainMenuService {

    getMenuItems(): MainMenuItem[] {
        return MENUITEMS;
    }
}