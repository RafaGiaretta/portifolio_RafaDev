import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,
             FontAwesomeModule,
             RouterLink,
             RouterModule,
          
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
