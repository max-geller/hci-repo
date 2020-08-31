
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../../shared/shared.module';
import { CoreModule } from './../../../../core/core.module';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactsRoutes } from './contacts.routes';



@NgModule({
  declarations: [ContactDetailComponent, ContactListComponent],
  imports: [
    CommonModule,
    ContactsRoutes,
    SharedModule,
    CoreModule
  ]
})
export class ContactsModule { }
