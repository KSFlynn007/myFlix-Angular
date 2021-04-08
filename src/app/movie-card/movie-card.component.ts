import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


import {
  GetAllMoviesService,
  GetOneMovieService,
  AddFavoriteMovieService
} from '../fetch-api-data.service';

import { DetailsDialogComponent } from '../details-dialog/details-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { ParameterReflection } from 'typedoc';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataOneMovie: GetOneMovieService,
    public fetchApiDataAddFav: AddFavoriteMovieService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) { }

  /**
   * getMovies() function is run on init
   */

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * retrieves a list of all the movies and stores them in an array
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Opens dialog box with movie summary info
   * 
   * @param title 
   * @param image 
   * @param description 
   * @param director 
   * @param genre 
   */
  showDetailsDialog(title: string, image: string, description: string,
    director: string, genre: string): void {
    this.dialog.open(DetailsDialogComponent, {
      data: { title, image, description, director, genre },
    });
  }

  /**
   * 
   * Opens dialog with movie director info
   * @param name 
   * @param bio 
   * @param birthday 
   */
  showDirectorDialog(name: string, bio: string, birthday: Date): void {
    this.dialog.open(DirectorDialogComponent, {
      data: { name, bio, birthday },
    });
  }

  /**
   * Opens dialog with movie genre info
   * 
   * @param name 
   * @param description 
   */
  showGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreDialogComponent, {
      data: { name, description },
    });
  }

  /**
   * Adds movie to favorite list, accessed via user-profile component
   * 
   * @param id 
   * @param Title 
   */

  addFavoriteMovie(id: string, Title: string): void {
    this.fetchApiDataAddFav.addFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      this.snackbar.open(
        `${Title} added to your favorites list!`, "OK", {
          duration: 2000
        }
      );
    });
  }
  
}

