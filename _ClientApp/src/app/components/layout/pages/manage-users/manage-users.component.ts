import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/reusable/shared/session.service';
import { UtilityService } from 'src/app/reusable/shared/utility.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  customersData = new MatTableDataSource();
  columnsTable: string[] = ['customerId', 'firstName', 'lastName', 'email', 'status', 'createdDate', 'updatedDate'];
  @ViewChild(MatPaginator) pagTable!: MatPaginator;
  @ViewChild('customersSort') customersSort = new MatSort();

  constructor(
    private _customerService: CustomerService,
    private _sesssionService: SessionService,
    private _utilityService: UtilityService,
    private router: Router
  ) {
  }

  getCustomers() {
    this._customerService.getAllCustomers().subscribe({
      next: (response) => {
        console.log(response.value);
        if(response.status) {
          this.customersData.data = response.value;
          this.customersData.paginator = this.pagTable;
        }
        else this._utilityService.showAlert('No data found.', 'Close', 'notif-warning');
      },
      error: (e) => {}
    });
  }

  ngOnInit(): void {
    const loggedUser = this._sesssionService.getSession();
    this._utilityService.showLoadingSpinner();
    if(loggedUser != null){
      this.getCustomers();
    }
    else {
      this._sesssionService.disposeSession();
      this.router.navigate(['login']);
    }
  }

  ngAfterViewInit(): void {
    this.customersData.sort = this.customersSort;
    setTimeout(() => this._utilityService.closeLoadingSpinner(), 500);
  }

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customersData.filter = filterValue.trim().toLowerCase();
  }
}
