import { Component } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon appli !';
  isAuth = false;

  appareilOne = 'ballon d\'eau chaude';
  appareilTwo = 'machine à laver';
  appareilThree = 'gazinière';

  onAllumer() {
    alert('bouton pas encore fonctionnel');
  }
  constructor() {
    setTimeout(() => this.isAuth = true, 4000);
  }
}
