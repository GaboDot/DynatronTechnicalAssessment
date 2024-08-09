import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { AuthGuard } from 'src/app/services/auth.guard';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { SalesReportComponent } from './pages/sales-report/sales-report.component';

const routes: Routes = [{ 
  path: '',
  component: LayoutComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'manage-customers', component: ManageUsersComponent, title: 'Manage Customers' },
    { path: 'add-customer', component: AddUserComponent, title: 'Add Customer' },
    { path: 'sales-report', component: SalesReportComponent, title: 'Sales Report' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }