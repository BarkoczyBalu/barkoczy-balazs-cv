import { Component, HostListener, OnInit } from '@angular/core';
import { IconDefinition, faEmpire, faJediOrder } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public isDarkMode: boolean = false;

  public faJediOrder: IconDefinition = faJediOrder;
  public faEmpire: IconDefinition = faEmpire;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    console.log("Scroll Event", window.scrollY );
    console.log(event);
  };

  constructor() { }

  ngOnInit(): void {
  }

  scrollIntoView(el: any) {
    
    el.scrollIntoView({behavior: 'smooth'});
  }

  public toggleDarkMode() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}
