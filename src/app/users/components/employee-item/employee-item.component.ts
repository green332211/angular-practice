import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() photo;
  @Input() name;
  @Input() profession;
  @Input() description;

  constructor() { }

  ngOnInit(): void { }
}
