import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { UtilityService } from 'src/app/reusable/shared/utility.service';

@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.css']
})
export class TestLayoutComponent {

  opened: boolean = false;
  listaMenus: Menu[] = [];
  email: string = '';
  nombre: string = '';
  @ViewChild('sidenav') sidenav: ElementRef<any>;

  constructor(private router: Router,
    private _utilityService: UtilityService) {

    }

    ngOnInit(): void {
      this.listaMenus = [
        { menuId: 1, menuText: 'Inicio', menuIcon: 'home', menuLink: '/testComponent', subMenus: []}
      ];
    }

    toggleSidenav() {
      this.sidenav.nativeElement.toggle();
      this.opened = !this.opened;
    }

    cerrarSesion(){}
}
