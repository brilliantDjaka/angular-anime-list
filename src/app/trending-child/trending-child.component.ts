import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-trending-child',
  templateUrl: './trending-child.component.html',
  styleUrls: ['./trending-child.component.css']
})
export class TrendingChildComponent implements OnInit {
  @Input()
  movie!: Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
