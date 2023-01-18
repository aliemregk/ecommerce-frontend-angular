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

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response.data;
        this.dataLoaded = true;
      },
      error: (errorResponse) => {
        this.dataLoaded = false;
        console.log(errorResponse);
      }
    });
  }
}
