import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected title: string = "Shop Application";

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}