import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-works-item',
  templateUrl: './works-item.component.html',
  styleUrls: ['./works-item.component.scss']
})
export class WorksItemComponent implements OnInit {
  @Input() photo;
  @Input() content;
  @Input() title;
  @Input() text;


  constructor() { }

  ngOnInit(): void { }
}
