import { SearchService } from './../../../../model/services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  constructor(protected readonly searchService: SearchService) { }

  ngOnInit(): void {
  }

}
