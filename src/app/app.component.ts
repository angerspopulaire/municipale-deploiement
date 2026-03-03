import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from './entete/entete.component';
import { RetourHautPage } from './retour-haut-page/retour-haut-page';
import { MentionLegales } from './mention-legales/mention-legales';
import { PiedDePage } from './pied-de-page/pied-de-page';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    RouterOutlet,
    EnteteComponent,
    RetourHautPage,
    PiedDePage,
  ]
})
export class AppComponent {
  title = 'municipale';
}
