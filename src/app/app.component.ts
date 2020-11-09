import { Component } from '@angular/core';
import { faGithub, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faSoundcloud = faSoundcloud;
  faEnvelope = faEnvelope;
  open(url): void {
    window.open(url);
  }
}
