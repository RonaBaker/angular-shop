import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ConfirmationDirective } from './confirmation.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ContactComponent,
    ConfirmationDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'contact', component: ContactComponent }])
  ]
})
export class ContactModule { }
