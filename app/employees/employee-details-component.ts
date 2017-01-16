import {Component, OnInit} from '@angular/core';
import {Employee} from './employee';
import {EMPLOYEES} from './mock-employees'
@Component({
	moduleId: module.id,//so to use relative urls here
	selector: 'employee-details',
	templateUrl:'employee-details-component.html',
	styleUrls:['../css/styles.css']
})
export class EmployeeDetailsComponent implements OnInit{	
	title:string = "Table";
	listFilter: string = ''
	employees:Employee[] = EMPLOYEES;	
	ngOnInit(): void{
		console.log("Inside OnInit");
	}
}