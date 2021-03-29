# myFlix-Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## User Stories

### User Story Feature 1
As a user, I should be able to register as a new user

```
Given a user has opened the application
And they haven't registered before
When they click "Sign Up"
Then a new endpoint will generate allowing them to register themselves
```

## User Story Feature 2
As a user, I should be able to login to access movies and my profile

```
Given a user has registered before
When they enter their login information on the main welcome page
And it is correct information
Then they can access all movies and their profile
```

## User Story Feature 3
As a user, I want to view information about a movie's genre or director or sypnosis

```
Given a user has already chosen a specific movie
When they click either "Synopsis", "Director" or "Genre" buttons
Then a modal will appear giving further details of that movie
```

## User Story Feature 4
As a user, I want to be able to save favorite movies to a list in my profile

```
Given a user has already chosen a specific movie
When they click the heart icon of that movie card
Then the movie will be added to a favorites list
And a confirmation window will appear
```

## User Story Feature 5
As a user, I want to be able to view and modify my favorite movies list

```
Given a user has clicked "My Profile" from the navbar
When the user clicks the trash icon from their list of favorite movies
Then the movie will disapear from that view and page will reload
```

## User Story Feature 6
As a user, I want to be able to update my profile information

```
Given a user is in their Profile view
When they enter in any new login information + existing password
And click "Submit Changes"
Then the user information will be changed
```

## User Story Feature 7
As a user, I want to be able to delete my profile

```
Given the user is in their Profile view
When a user clicks the "Dlete Profile" button
Then the user will be deleted from the server-side collection
And the page will clear their login information and log them out
```

## User Story Feature 8
As a user, I want to log out of the application at any time

```
Given the user is logged in
When they click "Logout" from the navbar
Then the user will be logged out and their information cleared from local storage
```









