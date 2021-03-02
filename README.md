# Show Stopper

## About the App:

This app is designed to be a personal app targeted towards users who watch multiple TV series concurrently and want to keep track of their shows

## Table of Contents

-   [App Link](https://github.com/cynthiajteo/show-tracker#app-link)
-   [Technologies Used](https://github.com/cynthiajteo/show-tracker#technologies-used)
-   [Database](https://github.com/cynthiajteo/show-tracker#database)
-   [Objective](https://github.com/cynthiajteo/show-tracker#objective)
-   [Approach Taken](https://github.com/cynthiajteo/show-tracker#approach-taken)
-   [Wireframe](https://github.com/cynthiajteo/show-tracker#wireframe)
-   [Screenshots](https://github.com/cynthiajteo/show-tracker#screenshots)
-   [RESTful Routes](https://github.com/cynthiajteo/show-tracker#restful-routes)
-   [Accomplishments](https://github.com/cynthiajteo/show-tracker#accomplishments)
-   [Challenges](https://github.com/cynthiajteo/show-tracker#challenges)
-   [Further Improvements](https://github.com/cynthiajteo/show-tracker#further-improvements)

## App Link:

https://show-stopper.herokuapp.com/

## Technologies Used:

-   **Bcrypt** is a password-hashing function
-   **Express** is a back end web application framework for Node.js
-   **Express-session** is used to store the user state with each given being assigned a unique session
-   **Method-override** is used to to convert HTTP verbs such as PUT or DELETE in places where the client doesn't support it
-   **Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.
-   **EJS** is a simple templating language that lets you generate HTML markup with plain JavaScript
-   **Dotenv** is a zero-dependency module that loads environment variables. It allows you to separate secrets from source code
-   **Skeleton** is used for CSS framework for HTML and CSS design templates

## Database:

-   **MongoDB** is a document-oriented NoSQL database that is used to store large amounts of data

## Objective:

-   Make a full CRUD (Create, Read, Update and Delete) using Node.js, MongoDB, Express and EJS that adheres to MVC (Models, Views, and Controllers) file structure
-   Use a CSS framework

## Approach Taken:

-   Do up basic wireframe to visualize app
-   Set up basic MVC structure with basic CRUD routes
-   Set up database in MongoDB
-   Set up authentication page
-   Test app functions
-   Link app to Heroku

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

| No. | Route   | URL               | HTTP Verb | Description                                                                      |
| --- | ------- | ----------------- | --------- | -------------------------------------------------------------------------------- |
| 1.  | Index   | /                 | GET       | Main App Landing Page                                                            |
|     |         | /app              | GET       | App Dashboard                                                                    |
| 2.  | New     | /sessions/new     | GET       | Log In Form                                                                      |
|     |         | /users/new        | GET       | Sign Up Form                                                                     |
|     |         | /app/new          | GET       | Add New Show Form                                                                |
| 3.  | Create  | /sessions         | POST      | Authenticates credentials against database and redirect to Main App Landing Page |
|     |         | /users            | POST      | Records new user into database and redirect to Main App Landing Page             |
|     |         | /app              | POST      | Creates new show and redirect to App Dashboard                                   |
| 4.  | Show    | /app/:showID      | GET       | Displays requested show                                                          |
| 5.  | Edit    | /app/:showID/edit | GET       | Edit Show Form that reflects current show data in form                           |
| 6.  | Update  | /app/:showID      | PUT       | Updates requested show and redirects to requested show page                      |
| 7.  | Destroy | /sessions         | DELETE    | Destroys session and redirect to Main App Landing Page                           |
|     |         | /app/:showID      | DELETE    | Deletes requested show in database and redirects to App Dasboard                 |

## Accomplishments:

-   The app meets the Minimum Viable Product's (MVP) requirements
-   User is able to create/edit/delete show

## Challenges:

-   Acessing shows as it's nested in User schema
-   Realizing too late that split models will definitely make accessibility easier

## Further Improvements:

-   Split models and use reference instead
-   Social App: Different user interactions (e.g. comment on other users' page, follow other users)
-   Filter shows (e.g. alphabetical order, completed, category etc.)
-   Input option to upload photos instead of using url
