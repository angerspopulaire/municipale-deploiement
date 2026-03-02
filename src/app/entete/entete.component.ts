import { Component, computed, signal } from "@angular/core"

@Component({
  standalone: true,
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent {
  protected isMenuDisplayed = signal(false)
  protected menuDisplayedClass = computed(()=> this.isMenuDisplayed() ? 'responsive' : '')
  public test = 'azy'
  public testsign = 0

  onClickMobileMenu(){
    this.isMenuDisplayed.update((isMenuDisplayed)=>!isMenuDisplayed);
    console.log( "isMenuDisplayed : ",this.isMenuDisplayed())
  }
}
