import { LoadMovieDBService } from './mb-movielist/loadmoviedb.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MbMovielistComponent } from './mb-movielist/mb-movielist.component';

@NgModule({
  declarations: [
    AppComponent,
    MbMovielistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoadMovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
