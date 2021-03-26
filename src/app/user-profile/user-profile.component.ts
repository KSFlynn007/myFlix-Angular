import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import {
  GetAllMoviesService,
  GetUserService,
  GetUserFavoriteService,
  AddFavoriteMovieService,
  UpdateUserService,
  DeleteUserService,
  DeleteFavoriteMovieService
} from '../fetch-api-data.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userData={Username: '', Password: '', Email: '', Birthday: ''};
  movies: any[] = [];
  favoriteMovies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  constructor(
    public fetchApiDataMovies: GetAllMoviesService,
    public fetchApiDataUsers: GetUserService,
    public fetchApiDataFavMovies: GetUserFavoriteService,
    public fetchApiDataAddMovie: AddFavoriteMovieService,
    public fetchApiDataUpdateUser: UpdateUserService,
    public fetchApiDataDeleteUser: DeleteUserService,
    public fetchApiDataDeleteMovie: DeleteFavoriteMovieService
  ) { }

  ngOnInit(): void {
    this.getUserFavorite();
  }

  // get list of favorite movies
  getUserFavorite(): void {
    const user = localStorage.getItem('user');
    console.log(user);
    if(user) {
      this.fetchApiDataUsers.getUser(user).subscribe((resp: any) => {
        this.favoriteMoviesIDs = resp.FavoriteMovies;
        console.log(resp);
        console.log(this.favoriteMoviesIDs);
        return this.favoriteMoviesIDs;
      })
    }
    setTimeout(() => {
      this.getAllMovies();
    }, 100);
  }

  // get list of all movies
  getAllMovies(): void {
    this.fetchApiDataMovies.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;

      console.log(this.movies);
      this.movies.forEach((movie) => {
        if(this.favoriteMoviesIDs.includes(movie._id))
          this.favoriteMovies.push(movie);
      });
      console.log(this.favoriteMovies);
      return this.favoriteMovies;
    });
  }

  deleteFavoriteMovie(id: string, title: string): void {
    this.fetchApiDataDeleteMovie.deleteFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      window.location.reload();
    })
  }


}
