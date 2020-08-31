import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';



@NgModule({
  declarations: [ContactDetailComponent, ContactListComponent],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
