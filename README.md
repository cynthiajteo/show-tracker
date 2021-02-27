# Show Stopper

## About the App:

This app is targeted toward users who watch multiple TV series concurrently and want to keep track of their shows. They may also leave reviews for each particular shows.

## Table of Contents

-   [App Link](https://github.com/cynthiajteo/show-tracker#app-link)
-   [Technologies Used](https://github.com/cynthiajteo/show-tracker#technologies-used)
-   [Database](https://github.com/cynthiajteo/show-tracker#database)
-   [Wireframe](https://github.com/cynthiajteo/show-tracker#wireframe)
-   [Approach Taken](https://github.com/cynthiajteo/show-tracker#approach-taken)
-   [Challenges](https://github.com/cynthiajteo/show-tracker#challenges)
-   [Screenshots](https://github.com/cynthiajteo/show-tracker#screenshots)
-   [RESTful Routes](https://github.com/cynthiajteo/show-tracker#restful-routes)
-   [Further Improvements](https://github.com/cynthiajteo/show-tracker#further-improvements)

## App Link:

https://show-stopper.herokuapp.com/

## Technologies Used:

-   Bcrypt
-   Express
-   Express-session
-   Method-override
-   Mongoose
-   EJS
-   Dotenv

## Database:

-   MongoDB

## Wireframe:

-   Landing Page
    ![Landing Page](img/wireframe/main.png)

-   Login Page
    ![Login Page](img/wireframe/login.png)

-   Dashboard
    ![Dashboard](img/wireframe/dashboard.png)

-   Show Route
    ![Show Page](img/wireframe/show.png)

-   Add New Show
    ![New Show Form](img/wireframe/new.png)

-   Edit Show
    ~[Edit Show Form](img/wireframe/edit.png)

## Approach Taken:

-   Do up basic wireframe to visualize app
-   Set up basic MVC structure with basic CRUD routes
-   Set up database in MongoDB
-   Set up authentication page
-   Test app functions
-   Link app to Heroku

## Challenges:

-   Acessing shows as it's nested in User schema
-   Realizing too late that split models will definitely make accessibility easier

## Screenshots:

-   Main App Landing Page
    ![Landing Page](img/screenshots/landing.png)

-   Login Page
    ![Log In Page](img/screenshots/log-in.png)

-   Sign Up Page
    ![Sign Up Page](img/screenshots/sign-up.png)

-   Authenticated User Page
    ![Authenticated User Page](img/screenshots/authenticated.png)

-   User Dashboard
    ![User Dashboard](img/screenshots/dashboard.png)

-   Add New Show Form
    ![Add New Show](img/screenshots/add-show.png)

-   Edit Show Form
    ![Edit Show](img/screenshots/edit-show.png)

## RESTful Routes:

| No. | Route   | URL               | HTTP Verb | Description                                                  |
| --- | ------- | ----------------- | --------- | ------------------------------------------------------------ |
| 1.  | Index   | /                 | GET       | Main App Landing Page                                        |
|     |         | /app              | GET       | App Dashboard                                                |
| 2.  | New     | /sessions/new     | GET       | Log In Form                                                  |
|     |         | /users/new        | GET       | Sign Up Form                                                 |
|     |         | /app/new          | GET       | Add New Show Form                                            |
| 3.  | Create  | /sessions         | POST      | Authenticates credentials against database and redirect to / |
|     |         | /users            | POST      | Records new user into database and redirect to /             |
|     |         | /app              | POST      | Creates new show and redirect to /app                        |
| 4.  | Show    | /app/:showID      | GET       | Displays requested show                                      |
| 5.  | Edit    | /app/:showID/edit | GET       | Edit Form - Show Information /                               |
| 6.  | Update  | /app/:showID      | PUT       | Updates show and redirects to show page                      |
| 7.  | Destroy | /sessions         | DELETE    | Destroys session and redirect to /                           |
|     |         | /app/:showID      | DELETE    | Deletes requested show in database and redirects to Dasboard |

## Further Improvements:

-   Split models and use reference instead
-   Different user interactions (e.g. commenting on other users' page)
-   Input option to upload photos instead of using url
