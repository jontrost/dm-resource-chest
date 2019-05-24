import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private titleService: Title) { }

  setTitle(title: string){
    this.titleService.setTitle(title);
  }

  ngOnInit() {
  }

}
