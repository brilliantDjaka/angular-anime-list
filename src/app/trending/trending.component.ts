import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent implements OnInit {
  movies: Array<Movie> = [
    {
      title: 'Shinobu',
      image_url:
        'https://1.bp.blogspot.com/-VYvfSfupH6E/X-hDlt9aa8I/AAAAAAAAiac/bF9I3iTWETU7VLJtFLN5v4ZT6bdF7RWlwCLcBGAsYHQ/s1920/0fc72732b938ca90f5ac982ec55f8297.png',
      mal_id: 123123123,
      rank: 1,
      url: 'https://1.bp.blogspot.com/-VYvfSfupH6E/X-hDlt9aa8I/AAAAAAAAiac/bF9I3iTWETU7VLJtFLN5v4ZT6bdF7RWlwCLcBGAsYHQ/s1920/0fc72732b938ca90f5ac982ec55f8297.png',
      episodes: 20,
      member: 20000,
      score: 9,
      type: 'TV',
    },
    {
      title: 'Shinobu',
      image_url:
        'https://1.bp.blogspot.com/-VYvfSfupH6E/X-hDlt9aa8I/AAAAAAAAiac/bF9I3iTWETU7VLJtFLN5v4ZT6bdF7RWlwCLcBGAsYHQ/s1920/0fc72732b938ca90f5ac982ec55f8297.png',
      mal_id: 123123123,
      rank: 1,
      url: 'https://1.bp.blogspot.com/-VYvfSfupH6E/X-hDlt9aa8I/AAAAAAAAiac/bF9I3iTWETU7VLJtFLN5v4ZT6bdF7RWlwCLcBGAsYHQ/s1920/0fc72732b938ca90f5ac982ec55f8297.png',
      episodes: 20,
      member: 20000,
      score: 9,
      type: 'TV',
    },
  ];
  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingService.getTrending().subscribe((movies)=>{
      console.log(movies);
      this.movies = movies['top'];
    })
  }
}
