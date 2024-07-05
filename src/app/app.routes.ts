import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [

    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'feed', component: FeedComponent
    },
    {
        path: 'contato', component: ContatoComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full' //primeira rota direciona para home
    },

];
