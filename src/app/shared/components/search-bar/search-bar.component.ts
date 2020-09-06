import { Component, OnInit } from '@angular/core';

import algoliasearch from 'algoliasearch/lite';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
  projectSearchConfig = {
    indexName: 'PROJECT',
    searchClient: algoliasearch('8K7V4TARGD', 'f4c1889dd27c98bebcaf99eb1e3c5fc2'),
    hitsPerPage: 8,
  };
  taskSearchConfig = {
    indexName: 'TASK',
    searchClient: algoliasearch('8K7V4TARGD', 'f4c1889dd27c98bebcaf99eb1e3c5fc2'),
    hitsPerPage: 8,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
