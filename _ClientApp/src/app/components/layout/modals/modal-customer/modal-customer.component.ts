import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/interfaces/customer';
import { UtilityService } from 'src/app/reusable/shared/utility.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-modal-customer',
  templateUrl: './modal-customer.component.html',
  styleUrls: ['./modal-customer.component.css']
})
export class ModalCustomerComponent implements OnInit{

  customerForm: FormGroup;
  modalTitle = 'Add';
  buttonText = 'Save';

  validateData() {
    if(this.customerData != null) {
      this.customerForm.patchValue({
        firstName: this.customerData.firstName,
        lastName: this.customerData.lastName,
        email: this.customerData.email
      });

      this.modalTitle = 'Edit';
      this.buttonText = 'Update';
    }
  }

  constructor(
    private modalCustomer: MatDialogRef<ModalCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public customerData: Customer,
    private fb: FormBuilder,
    private _customerService: CustomerService,
    private _utilityService: UtilityService
  ) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });

    
  }

  ngOnInit() {
   this.validateData();
  }

  saveUpdateCustomer() {
    const _customer: Customer = {
      customerId: this.customerData == null ? 0 : this.customerData.customerId,
      firstName: this.customerForm.value.firstName,
      lastName: this.customerForm.value.lastName,
      email: this.customerForm.value.email,
      status: this.customerData.status
    };

    if(this.customerData == null) {
      this._customerService.savenewCustomer(_customer).subscribe({
        next: (response) => {
          if(response.status) {
            this._utilityService.showAlert(`Customer added: ${response.value}`, '✖', 'notif-success');
            this.modalCustomer.close(true);
          }
          else this._utilityService.showAlert(response.message, '✖', 'notif-error');
        },
        error: (e) => {}
      });
    }
    else {
      this._customerService.updateCustomer(_customer).subscribe({
        next: (response) => {
          if(response.status) {
            this._utilityService.showAlert(response.value, '✖', 'notif-success');
            this.modalCustomer.close(true);
          }
          else this._utilityService.showAlert(response.message, '✖', 'notif-error');
        },
        error: (e) => {
          this._utilityService.showAlert(e.error.title, '✖', 'notif-error');
        }
      });
    }
  }
}
