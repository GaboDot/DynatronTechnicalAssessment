import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'src/app/reusable/shared/shared.module';
import { LoadingSpinnerComponent } from './modals/loading/loading.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ManageUsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
