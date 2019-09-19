import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SocialTabComponent } from './social-tab/social-tab.component';
import { LanguagePipe } from './language.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SocialTabComponent,
    LanguagePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
