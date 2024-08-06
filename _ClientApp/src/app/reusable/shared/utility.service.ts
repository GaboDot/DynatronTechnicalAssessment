import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingSpinnerComponent } from 'src/app/components/layout/modals/loading/loading.component';
import { Menu, MultiLevelMenu } from 'src/app/interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  isOpen: boolean = false;
  private winHeight = 0;
  private gridHeight = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private dialogLoading: MatDialog,
    public dialogRef: MatDialogRef<LoadingSpinnerComponent>,
  ) {
    
  }

  heightForMainGrid(): number {
    this.winHeight = window.innerHeight;
    this.gridHeight = this.winHeight > 665 ? 800 : 525;
    return this.gridHeight;
  }

  heightForModalGrid(): number {
    this.winHeight = window.innerHeight;
    this.gridHeight = this.winHeight > 665 ? 550 : 325;
    return this.gridHeight;
  }

  showAlert(mensaje: string, action: string, customCSS: string) {
    this._snackBar.open(mensaje, action, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      panelClass: customCSS
    });
  }

  showLoadingSpinner() {
    if(this.isOpen) return;
    this.isOpen = true;
    this.dialogRef = this.dialogLoading.open(LoadingSpinnerComponent, { disableClose: true });
    this.dialogRef.afterClosed().subscribe(() => {
      this.isOpen = false;
    })
  }

  closeLoadingSpinner() {
    this.dialogRef.close();
  }

  transformListMenu(menuList: Menu[]): MultiLevelMenu[] {

    let transformedMenu: MultiLevelMenu[] = [];

    menuList.forEach(menu => {
      let newMenu: MultiLevelMenu = new MultiLevelMenu();

      newMenu.label = menu.menuText;
      newMenu.icon = menu.menuIcon;

      if(menu.menuLink.length > 0)
        newMenu.link = '/pages/' + menu.menuLink;
      else
        newMenu.link = menu.menuLink;

      if(menu.subMenus.length > 0) {
        let subMenus = this.transformListMenu(menu.subMenus);
        newMenu.items = subMenus;
      }

      transformedMenu.push(newMenu);
    });

    return transformedMenu;
  }

}
