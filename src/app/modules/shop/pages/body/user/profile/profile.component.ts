import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = { id: 1, name: "user name", email: "user@email", address: "user address 123", phone: "123123123" };


  constructor() { }

  ngOnInit(): void {
  }

}
