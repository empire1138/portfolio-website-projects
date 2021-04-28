import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UppercasePipe } from './uppercase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ConfirmPageComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
