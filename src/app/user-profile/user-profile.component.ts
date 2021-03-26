import { Component, Input, OnInit } from '@angular/core';
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
    public fetchApiDataDeleteMovie: DeleteFavoriteMovieService,
    public snackBar: MatSnackBar,
    private router: Router
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
      this.snackBar.open(
        `${title} has been removed from your favorites list.`, `OK`, {
          duration: 2000
        }
      );
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    })
  }

  updateUser(): void {
    this.fetchApiDataUpdateUser.updateUser(this.userData).subscribe((result) => {
      console.log(result);
      this.snackBar.open("Your profile has been updated.", "OK", {
        duration: 2000
      });
    },
      (result) => {
        console.log(result);
        this.snackBar.open(result, "OK", {
          duration: 5000
        });
      });
  }

  deleteUser(): void {
    let OK = confirm("Are you sure you want to delete your profile? This action cannot be undone.");
    if(OK) {
      this.fetchApiDataDeleteUser.deleteUser().subscribe(() => {
        localStorage.clear();
        this.router.navigate(['welcome']);
        this.snackBar.open('Your profile was deleted.', "OK", {
          duration: 2000
      });     
     });
    } else {
      window.location.reload();
    }
  }
}
