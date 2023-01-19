import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly toastr: ToastrService) { }

  public success(message: string): void {
    this.toastr.success(message);
  }

  public info(message: string): void {
    this.toastr.info(message);
  }

  public error(message: string): void {
    this.toastr.error(message);
  }

  public func(message: string): void {
    this.toastr.warning(message);
  }
}
