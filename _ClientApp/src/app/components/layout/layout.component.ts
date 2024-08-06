import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu, MultiLevelMenu } from 'src/app/interfaces/menu';
import { UtilityService } from 'src/app/reusable/shared/utility.service';
import { SessionService } from 'src/app/reusable/shared/session.service';
import { MenuService } from 'src/app/services/menu-service';
import { MultilevelNode, Configuration, ExpandedRTL, ExpandedLTR } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  opened: boolean = false;
  menuList: MultiLevelMenu[] = [];
  email: string = '';
  name: string = '';
  config: Configuration = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    highlightOnSelect: true,
    collapseOnSelect: true,
    useDividers: true,
    rtlLayout: false,
    fontColor: 'rgb(255, 255, 255)',
    selectedListFontColor: 'rgb(23, 1775, 255)',
}

  constructor(
    private router: Router,
    private _menuService: MenuService,
    private _utilityService: UtilityService,
    private _sessionService: SessionService
  ) {}

  ngOnInit(): void {
    const loggedInUser = this._sessionService.getSession();
    if(loggedInUser != null) {
      this.email = loggedInUser.email;
      this.name = loggedInUser.fullName;
      this._menuService.GetUserMenu(loggedInUser.profileID).subscribe({
        next: (response) => {
          if(response.status)
          {
            let menuTemp = response.value;
            this.menuList = this._utilityService.transformListMenu(menuTemp);
          }
        },
        error: (e) => {}
      });
    }
    else {
      this._sessionService.disposeSession();
      this.router.navigate(['login']);
    }
  }

  logout() {
    this._sessionService.disposeSession();
    this.router.navigate(['login']);
  }

}