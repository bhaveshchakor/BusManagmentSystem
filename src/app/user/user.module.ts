import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpassresetComponent } from './userpassreset/userpassreset.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { UsertrackstatusComponent } from './usertrackstatus/usertrackstatus.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserloginComponent,
    UserpassresetComponent,
    UserhomepageComponent,
    UsertrackstatusComponent,
    UserregisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserloginComponent,
    UserpassresetComponent,
    UserhomepageComponent,
    UserregisterComponent
  ]
})
export class UserModule { }
