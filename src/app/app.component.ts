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
  currentPage: string = 'home';

  listPage = [
    {
      id: 'home',
      route: '#home',
      name: 'Home',
    },
    {
      id: 'about-me',
      route: '#about-me',
      name: 'About me'
    },
    {
      id: 'resume',
      route: '#resume',
      name: 'Resume'
    },
    {
      id: 'portfolio',
      route: '#portfolio',
      name: 'Portfolio'
    },
    {
      id: 'contact-me',
      route: '#contact-me',
      name: 'Contact me'
    },
  ]
  constructor(){}

  ngOnInit(): void {
  }

  changePage(pageId: string) {
    this.currentPage = pageId;
  }
}
