# Show Stopper

## About the app:

This app is targeted toward users who watch multiple TV series concurrently and want to keep track of their shows. They may also leave reviews for each particular shows.

## App Link:

https://show-stopper.herokuapp.com/

## Wireframe:

## Technologies Used:

-   bcrypt
-   express
-   express-sessions
-   method-override
-   mongoose
-   ejs
-   dotenv

## Database:

-   MongoDB

## Approach Taken:

-   do up basic wireframe to visualize app
-   set up basic MVC structure with basic CRUD routes
-   set up database in MongoDB
-   set up authentication page
-   linked app to Heroku
-   test app functions

## Challenges:

-   Acessing shows as it's nested in User schema

## Known Issues:

-   none so far

## Screenshots:

-   Main App Landing Page
    ![Landing Page](img/landing.png)

-   Login Page
    ![Log In Page](img/log-in.png)

-   Sign Up Page
    ![Sign Up Page](img/sign-up.png)

-   Authenticated User Page
    ![Authenticated User Page](img/authenticated.png)

-   User Dashboard
    ![User Dashboard](img/dashboard.png)

-   Add New Show Form
    ![Add New Show](img/add-show.png)

-   Edit Show Form
    ![Edit Show](img/edit-show.png)

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

-   different user interactions (e.g. commenting on other users' page)
-   input option to upload photos instead of using url
