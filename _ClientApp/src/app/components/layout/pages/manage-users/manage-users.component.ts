import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { SessionService } from 'src/app/reusable/shared/session.service';
import { UtilityService } from 'src/app/reusable/shared/utility.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {

  customersData = new MatTableDataSource([]);
  columnsTable: string[] = ['customerId', 'firstName', 'lastName', 'email', 'status', 'createdDate', 'updatedDate', 'actions'];
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
        if(response.status) {
          console.log(response.value);
          this.customersData.data = response.value;
          this.customersData.paginator = this.pagTable;
        }
        else this._utilityService.showAlert('No data found.', '✖', 'notif-warning');
      },
      error: (e) => {
        this._sesssionService.disposeSession();
      }
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

  udpateCustomerStatus($event: MatSlideToggleChange, toUpdate: Customer) {

    let customerIdx = this.customersData.data.findIndex((obj: Customer) => {
      return obj.customerId === toUpdate.customerId;
    });

    (this.customersData.data[customerIdx] as Customer).status = $event.checked;
    this._utilityService.showLoadingSpinner();

    this._customerService.updateCustomer(toUpdate).subscribe({
      next: (response) => {
        if(response.status) {
          setTimeout(() => {
            this._utilityService.closeLoadingSpinner()
            this._utilityService.showAlert('Status updated!', '✖', 'notif-success')
          }, 500);
          
        }
        else {
          (this.customersData.data[customerIdx] as Customer).status = !$event.checked;
          setTimeout(() => {
            this._utilityService.closeLoadingSpinner()
            this._utilityService.showAlert('Unable to update status', '✖', 'notif-error');
          }, 500);
        }
      },
      error: (e) => { }
    });
  }
}
