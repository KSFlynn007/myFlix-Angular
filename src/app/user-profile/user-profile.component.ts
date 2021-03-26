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
    this.getUserFavorite()
  }

  // get list of favorite movies
  getUserFavorite(): void {
    const user = localStorage.getItem('user');
    console.log(user);
    if(user) {
      this.fetchApiDataUsers.getUser(user).subscribe
    }
  }

}
