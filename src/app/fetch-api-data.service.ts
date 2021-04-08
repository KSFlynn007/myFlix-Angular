import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';

const apiUrl = 'https://m-y-f-l-i-x.herokuapp.com/'

/**
 * New User Registration Service:
 * @Injectable tells Angular that this service is available everywhere
 */
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  /**
   * Injects the HttpClient module to the constructor params, provides HttpClient to the entire class, making it available via this.http
   * @param http 
   * 
   */
  constructor(private http: HttpClient) {
  }
  /** 
   * @param userDetails 
   * @returns the user information
   */
//  Observable is typescript cast
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    // .pipe function used to combine multiple functions to one.
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }

  /**
   * @param error 
   * @returns the error handling
   */
  private handleError(error: HttpErrorResponse): any {
      if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
      } else {
      console.error(
          `Error Status code ${error.status}, ` +
          `Error body is: ${error.error}`);
      }
      return throwError(
      'Something bad happened; please try again later.');
    }
}


/**
 * User Login Service:
 */
@Injectable({
  providedIn: 'root'
})

export class UserLoginService {
  /**
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * @param userDetails 
   * @returns posts the new user information to the database
   */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * @param error 
   * @returns the userLogin error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occured:', error.error.message);
    } else {
      console.error(
        `Error Status Code ${error.status}, ` +
        `Error body is ${error.error}`);
      }
      return throwError(
        'Something bad has happened, try again later.'
      );
  }
}

/**
 * getAllMovies() service
 */
@Injectable({
  providedIn: 'root'
})

export class GetAllMoviesService {
  /**
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns all movies list from database
   */
  getAllMovies(): Observable<any> {
      const token = localStorage.getItem('token');
      return this.http.get(apiUrl + 'movies', {headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
      }).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
    }
    /**
     * Non-typed response extraction
     * @param res 
     */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getAllMovies error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Get one movie by title:
 */
@Injectable({
  providedIn: 'root'
})

export class GetOneMovieService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * gets a movie by title:
   * @returns single movie by title
   */
  getMovieByTitle(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getMovieByTitle error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Get Director:
 */
@Injectable({
  providedIn: 'root'
})

export class GetDirectorService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * getDirector()
   * @returns director information
   */
  getDirector(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/directors/:Name', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getDirector error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Get Genre:
 */
@Injectable({
  providedIn: 'root'
})

export class GetGenreService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns movie genres
   */
  getGenre(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + 'movies/genres/:Name', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getDirector error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Get User:
 */
@Injectable({
  providedIn: 'root'
})

export class GetUserService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param username 
   * @returns user information from database
   */
  getUser(username: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(apiUrl + `users/${username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getUser error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Update User:
 */
@Injectable({
  providedIn: 'root'
})

export class UpdateUserService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param userData 
   * @returns updated user information (PUT) to database
   */
  updateUser(userData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.put(apiUrl + `users/${username}`, userData, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns updateUser error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Delete User:
 */
@Injectable({
  providedIn: 'root'
})

export class DeleteUserService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns delete method for user
   */
  deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }),
      responseType: 'text'
    }).pipe(catchError(this.handleError));
  }

  /**
   * @param error 
   * @returns deleteUser error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Get Favorite Movies:
 */
@Injectable({
  providedIn: 'root'
})

export class GetUserFavoriteService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @returns user favorite movie list object
   */
  getUserFavorite(): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/FavoriteMovies`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns getUserFavorite error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Add Movies to Favorites:
 */
@Injectable({
  providedIn: 'root'
})

export class AddFavoriteMovieService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param id 
   * @returns post, adds movie to user's favorite's in database
   */
  addFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.post(apiUrl + `users/${username}/FavoriteMovies/${id}`, id, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns addFavoriteMovies error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}

/**
 * Delete Favorite Movies:
 */
@Injectable({
  providedIn: 'root'
})

export class DeleteFavoriteMovieService {
  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) {}

  /**
   * 
   * @param id 
   * @returns delete favorite movie from user collection in database
   */
  deleteFavoriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    return this.http.delete(apiUrl + `users/${username}/FavoriteMovies/${id}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  /**
   * 
   * @param res 
   */
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
  }

  /**
   * @param error 
   * @returns deleteFavoriteMovie error handling
   */
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Something bad happened; please try again later.');
  }
}