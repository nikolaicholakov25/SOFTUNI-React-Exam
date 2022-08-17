# Cinema Single Page Application
This app uses

- React
- Font Awesome
- Java Script
- HTML
- CSS
- SoftUni Practise server for storing user details and films

## How To Start The App

In the main folder there are to folders

- App
- Server

You have to open two terminals and then go to each of the folders in these two terminals by typing:
- "cd {folderName}"

and then to start the react app use
- npm start

and to start the server use
- node server

After that a new window is going to be opened and you will be able to log in or register to start interacting with the app

there is a pre-made user from the server for testing

username: peter@abv.bg
password: 123456

## Functionality

The application allows loged in users to create, edit, delete, like and reserve films.

In the app a creator of a film can EDIT or DELETE a film.

A loged in user, not creator of the film can Like and Reserve a seat for a film.

A guest user can view the film details and film Likes, but cannot interact with the films.

### Error Handling

The Error handling is visible when an user makes a mistake trying to:

- Register 
- Log In
- Edit a Film
- Create a Film
- Like a Film for second time
- Tries to interact with a Film without login in

The error handling is in the way of a window alert explaining whats wrong , that way the app will not crash when an error occurs.

There is also a confirmation alert when trying to delete a film.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
