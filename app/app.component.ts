import { Component } from '@angular/core';

@Component({
  selector: 'my-employees-header',
  template: `
				<div class="wrapper">	
					<h1>{{title}}</h1>
					<p>{{text}}</p>
					<employee-details></employee-details>
				</div>
			`,
  styleUrls:['app/css/styles.css']
})
export class AppComponent  { 
	title:string = 'Employees\' details'; 
	text: string = "Find the details of the Company's employees listed here.";
}
