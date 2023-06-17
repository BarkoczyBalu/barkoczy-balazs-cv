import { Component, HostListener, OnInit } from '@angular/core';
import { IconDefinition, faEmpire, faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuOpen: boolean = false;
  public isDarkMode: boolean = false;
  public langImgUrl: string = "assets/flag_en.png";

  public faJediOrder: IconDefinition = faJediOrder;
  public faEmpire: IconDefinition = faEmpire;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    console.log("Scroll Event", window.scrollY );
    console.log(event);
  };

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  scrollIntoView(el: any) {
    
    el.scrollIntoView({behavior: 'smooth'});
  }

  public toggleDarkMode() {
    this.isDarkMode 
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');
  }

  public changeLanguage() {
    if (this.langImgUrl.includes('en')) {
      this.langImgUrl = "assets/flag_hu.png";
      this.translate.use('hu');
    } else {
      this.langImgUrl = "assets/flag_en.png";
      this.translate.use('en');
    }
    
  }

}
