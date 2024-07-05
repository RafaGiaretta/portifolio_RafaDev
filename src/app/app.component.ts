import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ContatoComponent } from './contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            NavbarComponent, 
            FooterComponent, 
            ContatoComponent,
            FontAwesomeModule,
            RouterLink,
            RouterModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
