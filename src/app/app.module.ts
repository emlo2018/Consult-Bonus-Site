import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultsComponent } from './consults/consults.component';
import { ConsultComponent } from './consults/consult/consult.component';
import { ConsultListComponent } from './consults/consult-list/consult-list.component';
import { ConsultService } from './shared/consult.service';
import { NavigationComponent } from './navigation/navigation.component';
import { BonusgeneratorComponent } from './bonusgenerator/bonusgenerator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultsComponent,
    ConsultComponent,
    ConsultListComponent,
    NavigationComponent,
    BonusgeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ConsultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
