import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Jose';

  userData = {
    email: 'jose@email.com',
    role: 'Admin',
  };

  title = 'CursoAngular';
}
