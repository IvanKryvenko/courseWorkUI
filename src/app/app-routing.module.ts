import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveQueryComponent } from './components/archive-query/archive-query.component';
import { CityQueryComponent } from './components/city-query/city-query.component';
import { ClientQueryComponent } from './components/client-query/client-query.component';
import { DeliveryQueryComponent } from './components/delivery-query/delivery-query.component';
import { EmployeeQueryComponent } from './components/employee-query/employee-query.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostOfficeQueryComponent } from './components/post-office-query/post-office-query.component';
import { RequestComponent } from './components/request/request.component';
import { ServiceQueryComponent } from './components/service-query/service-query.component';
import { TableComponent } from './components/table/table.component';
import { TransportQueryComponent } from './components/transport-query/transport-query.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'tables' , component: TableComponent},
  {path: 'queries', component: RequestComponent, children: [
    {path: '', redirectTo: '/queries/postOffice', pathMatch: 'full'},
    {path: 'postOffice', pathMatch: 'full', component: PostOfficeQueryComponent},
    {path: 'service', pathMatch: 'full', component: ServiceQueryComponent},
    {path: 'transport', pathMatch: 'full', component: TransportQueryComponent},
    {path: 'client', pathMatch: 'full', component: ClientQueryComponent},
    {path: 'employee', pathMatch: 'full', component: EmployeeQueryComponent},
    {path: 'delivery', pathMatch: 'full', component: DeliveryQueryComponent},
    {path: 'archive', pathMatch: 'full', component: ArchiveQueryComponent},
    {path: 'city', pathMatch: 'full', component: CityQueryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

