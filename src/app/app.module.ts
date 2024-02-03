import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { PassresetComponent } from './admin/passreset/passreset.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UserModule,
        FormsModule,
        AppRoutingModule,

    ]
})
export class AppModule { }
