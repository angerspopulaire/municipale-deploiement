import { Component } from '@angular/core';
import { SectionEnteteComponent } from './section-entete/section-entete.component';
import { SectionPresentationComponent } from './section-presentation/section-presentation.component';
import { SectionRejoindreComponent } from './section-rejoindre/section-rejoindre.component';
import { EnteteComponent } from './entete/entete.component';

@Component({
  standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[
    SectionEnteteComponent,
    SectionPresentationComponent,
    SectionRejoindreComponent,
    EnteteComponent,
  ]
})
export class AppComponent {
  title = 'municipale';
}
