import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private titleService: Title) { }

  menuClicked: boolean = false;

  setTitle(title: string){
    this.titleService.setTitle(title);
    this.menuClicked = false;
  }

  toggleMenu() {
    this.menuClicked = !this.menuClicked;
  }
}
