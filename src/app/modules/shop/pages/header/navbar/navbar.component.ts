import { NotificationService } from './../../../../../shared/services/notification.service';
import { Category } from '../../../../model/models/entities/category.model';
import { CategoryService } from './../../../../model/services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  protected categories!: Category[];
  protected dataLoaded: boolean = false;

  constructor(
    private readonly categoryService: CategoryService,
    private readonly notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  private getAllCategories() {
    this.categoryService.getAll().subscribe({
      next: (response) => {
        this.categories = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        this.notificationService.error(errorResponse.error.message);
      }
    });
  }
}
