import { User } from './../../../../../model/models/entities/user.model';
import { SessionService } from './../../../../../model/services/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  protected user!: User;

  constructor(private readonly sessionService: SessionService) { }

  ngOnInit(): void {
    this.user = this.sessionService.getUser();
  }

  public get name(): string {
    return this.user.firstName + " " + this.user.lastName;
  }

}
