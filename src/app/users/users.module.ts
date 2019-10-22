import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users.routing';

import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';

@NgModule({
    declarations: [
      UsersPageComponent,
      UserItemComponent,
      EmployeeItemComponent
    ],
    imports: [
      CommonModule,
      UsersRoutingModule
    ]
})
export class UsersModule {}
