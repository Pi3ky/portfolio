import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  portfolio = {
    name: 'Khang',
    desc: 'Web Designer'
  }
  socials = [
    {
      fa: 'fa-square-facebook',
      name: 'Facebook',
      link: 'https://www.facebook.com/khangpm2',
      bg: '#3b5998'
    },
    {
      fa: 'fa-youtube',
      name: 'Youtube',
      link: 'https://www.youtube.com',
      bg: '#ff0000'
    },
    {
      fa: 'fa-github',
      name: 'Github',
      link: 'https://github.com/Pi3ky',
      bg: '#333333'
    },
    {
      fa: 'fa-linkedin-in',
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/khang-bui-dinh-126773202/',
      bg: '#0077b5'
    },
  ]
}
