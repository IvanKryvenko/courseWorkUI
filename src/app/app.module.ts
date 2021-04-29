import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TableComponent } from './components/table/table.component';
import { RequestComponent } from './components/request/request.component';
import { EditComponent } from './components/edit/edit.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEditRecordModalComponent } from './components/table/add-edit-record-modal/add-edit-record-modal.component';
import { CityQueryComponent } from './components/city-query/city-query.component';
import { ClientQueryComponent } from './components/client-query/client-query.component';
import { EmployeeQueryComponent } from './components/employee-query/employee-query.component';
import { PostOfficeQueryComponent } from './components/post-office-query/post-office-query.component';
import { ArchiveQueryComponent } from './components/archive-query/archive-query.component';
import { DeliveryQueryComponent } from './components/delivery-query/delivery-query.component';
import { TransportQueryComponent } from './components/transport-query/transport-query.component';
import { ServiceQueryComponent } from './components/service-query/service-query.component';
import { CustomQueryComponent } from './components/custom-query/custom-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TableComponent,
    RequestComponent,
    EditComponent,
    AddEditRecordModalComponent,
    CityQueryComponent,
    ClientQueryComponent,
    EmployeeQueryComponent,
    PostOfficeQueryComponent,
    ArchiveQueryComponent,
    DeliveryQueryComponent,
    TransportQueryComponent,
    ServiceQueryComponent,
    CustomQueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
