import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PassresetComponent } from './passreset/passreset.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AddbusComponent } from './addbus/addbus.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { TrackstatusComponent } from './trackstatus/trackstatus.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from '../user/user.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        AdminloginComponent,
        PassresetComponent,
        AdminhomepageComponent,
        AddbusComponent,
        AddemployeeComponent,
        TrackstatusComponent,
        UpdateComponent,
        ShowComponent,
    ],
    exports: [
        AdminloginComponent,
        PassresetComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        UserModule,
        AdminRoutingModule

    ]
})
export class AdminModule { }
