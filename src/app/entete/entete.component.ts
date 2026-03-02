import { Component } from '@angular/core';
import {signal} from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent {
  public test = 'azy'
  public testsign = signal(0)
}
