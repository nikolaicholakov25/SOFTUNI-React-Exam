# Cinema Single Page Application
This app uses

- React
- Font Awesome
- Java Script
- HTML
- CSS
- SoftUni Practise server for storing user details and films - https://github.com/softuni-practice-server/softuni-practice-server

## How To Start The App

In the main folder there are two folders

- App
- Server

You have to open two terminals and then go to each of the folders in these two terminals by typing:
- "cd {folderName}"

and then to start the react app use
- npm start

and to start the server use
- node server

After that a new window is going to be opened and you will be able to login or register to start interacting with the app

there is a pre-made user from the server for testing

username: peter@abv.bg / password: 123456

There are 6 film titles and links to their posters for quicker film creation 

## Functionality

The application allows loged in users to create, edit, delete, like and reserve films.

In the app a creator of a film can EDIT or DELETE a film.

A loged in user, not creator of the film can Like and Reserve a seat for a film.

A guest user can view the film details and film Likes, but cannot interact with the films.

The Reservation page shows all the films you have reserved a seat for.

### Error Handling

The Error handling is visible when an user makes a mistake trying to:

- Register 
- Log In
- Edit a Film
- Create a Film
- Like a Film for second time
- Tries to interact with a Film without loging in

The error handling is in the way of a window alert explaining whats wrong , that way the app will not crash when an error occurs.

There is also a confirmation alert when trying to delete a film.

### React Usage in this App

The app has all its pages split into react (.jsx) components

The app uses routing for every page of the app

I am using "useEffect" for the initial load of the pages to show all the movies, likes, reservation status and film details

"useState" to update the details on the page after an user makes a change

There is also a "Context" so i can avoid the prop drilling , the context in the app is called "UserSessionContext" and it includes the "userSession" state and the "setChange" state 

## userSession

"userSession" is using sessionStorage to save the user details and the authentication token needed to EDIT, DELETE and CREATE a film.

Even after a refresh of the webpage these details are not lost. The sessionStorage is being generated after a successful Login or Register and its being destroyed after a log out.

## setChange

"setChage" is the function that changes the "change" state which is positioned in the "app.js" file

This is being used only after a successful login, register or logout to update the navigation component of the app
