import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from './employees/employee-filter.pipe';


import { AppComponent }  from './app.component';
import {EmployeeDetailsComponent} from './employees/employee-details-component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
					AppComponent,
					EmployeeDetailsComponent, 
					EmployeeFilterPipe
					
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
