# Cinema Single Page Application
This app uses

- React
- Firebase
- Font Awesome
- google-map-react Library
- Java Script
- HTML
- CSS

## How To Start The App

The app is live / go to https://cinema-app-27cee.web.app/

premade users {
    username: peter@abv.bg,
    password: 123456
}

## Functionality

The application allows loged in users to create, edit, delete, like and reserve films.

In the app a creator of a film can EDIT or DELETE a film.

A loged in user, not creator of the film can Like and Reserve a seat for a film.

A guest user can view the film details and film Likes, but cannot interact with the films.

The Reservation page shows all the films you have reserved a seat for.

You can like and then dislike a movie and you can reserve a seat and then delete reservation.

There is a Google Map with a couple of markers for Cinemas around London.
### Error Handling

The Error handling is visible when an user makes a mistake trying to:

- Register 
- Log In
- Edit a Film
- Create a Film
- Tries to interact with a Film without loging in

The error handling is in the way of a window alert explaining whats wrong , that way the app will not crash when an error occurs.

There is also a confirmation alert when trying to delete a film.

### React Usage in this App

The app has all its pages split into react (.jsx) components

The app uses routing for every page of the app

I am using "useEffect" for the initial load of the pages to show all the movies, likes, reservation status and film details

"useState" to update the details on the page after an user makes a change

There is also a "Context" so i can avoid the prop drilling , the context in the app is called "UserSessionContext" and it includes the "userSession" state and the "setChange" state 

### Firebase Usage in this App

I am using 

- firebase/auth for user authertication and storing userData

- firebase/firestore for storing film data

- And i am using the firebase hosting to deploy the app
