import { LocalStorageService } from './../shared/services/local-storage.service';
import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private home: HomeService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.home.getPosts().subscribe(data => {
      console.log(data);
      this.localStorageService.set('data', data);
    });
  }
}
