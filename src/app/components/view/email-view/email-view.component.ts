import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-view',
  imports: [],
  templateUrl: './email-view.component.html',
})
export class EmailViewComponent implements OnInit {

  @Input() emailHtml: string = '';

  constructor() {}

  ngOnInit(): void {}
}
