import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  protected description: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, tenetur."
  protected facebookUrl: string = "";
  protected instagramUrl: string = "";
  protected linkedInUrl: string = "";
  protected twitterUrl: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
