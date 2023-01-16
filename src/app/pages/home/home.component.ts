import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jobs = ['Frontend developer', 'Web designer'];
  myJob: string = '';
  offset = 0;
  forwards = true;
  skip_count = 0;
  skip_delay = 15;
  speed = 70;
  infomation = {
    name: "Khang Bui Dinh",
    shortName: "Ka",
    age: 25,
    address: "Me Linh District, Hanoi",
    email: "ka.0709fe@gmail.com",
    phone: "+84 38 662 4545",
    onWork: true
  }
  constructor() {}

  ngOnInit(): void {
    let i = 0;
    setInterval(() => {
      if (this.forwards) {
        if (this.offset >= this.jobs[i].length) {
          ++this.skip_count;
          if (this.skip_count === this.skip_delay) {
            this.forwards = false;
            this.skip_count = 0;
          }
        }
      } else {
        if (this.offset == 0) {
          this.forwards = true;
          i++;
          this.offset = 0;
          if (i >= this.jobs.length) {
            i = 0;
          }
        }
      }
      this.myJob = this.jobs[i].substring(0, this.offset);
      if (this.skip_count === 0) {
        if (this.forwards) {
          this.offset++;
        }
        else {
          this.offset--;
        }
      }
    }, this.speed);
  }
}
