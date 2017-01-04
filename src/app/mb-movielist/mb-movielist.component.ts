import { LoadMovieDBService } from './loadmoviedb.service';
import { Component, OnInit, ElementRef, Renderer, HostListener, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

declare var $: any;

type MovieList = {
  "img": string,
  "localname": string,
  "ratingValue": number,
  "sub_title": string,
  "summaryText": string,
  "title": string,
  "url": string,
  "year": string
}[];


@Component({
  selector: 'mb-movielist',
  templateUrl: './mb-movielist.component.html',
  styleUrls: ['./mb-movielist.component.css']
})
export class MbMovielistComponent implements OnInit {


  private movieList: MovieList;
  private isMouseEnterImgDiv: boolean;

  constructor(private service: LoadMovieDBService,
    private sanitizer: DomSanitizer) {
    service.getMovieListAsObservable().subscribe((resp) => {
      this.movieList = resp.json().movieList;
    });
  }


  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngAfterViewChecked() {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });
  }


  ngOnInit() {

  }
  onPlayClick(i) {
    $('.ui.basic.modal.' + i)
      .modal('show');
  }

}
