import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  intro = {
    main: 'Web designer',
    sub: 'Frontend-developer'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
