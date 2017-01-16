import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from './employee';

@Pipe({
	name: 'productFilter'
})

export class EmployeeFilterPipe implements PipeTransform{
	transform(value: Employee[], filterBy: string): Employee[]{
		filterBy = filterBy ? filterBy.toLocaleLowerCase():null;
		return filterBy ? value.filter((employee: Employee) => employee.surname.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
	}
}
