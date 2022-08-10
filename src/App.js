import {useEffect, useState} from 'react'
import { Routes , Route } from "react-router-dom";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { LoginPage} from './components/LoginPage'
import {AddFilmPage} from './components/AddFilmPage'
import {showSession} from './services/userServices'
import { UserSessionContext } from './components/contexts/userSessionContext';
import { RegisterPage } from './components/RegisterPage';
import { FilmDetails } from './components/FilmDetails';
import { EditFilmPage } from './components/EditFilm';
import { MyReservations } from './components/MyReservations';

function App() {
  let [userSession , setUserSession] = useState(showSession())
  let [change, setChange] = useState(false)

  useEffect(() => {
    setUserSession(showSession())
  },[change])

  return (
  <>
    
        <UserSessionContext.Provider value={{userSession , setChange}}>
          <NavBar />
          <div className="App">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-film" element={<AddFilmPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/film-details/:filmId" element={<FilmDetails />} />
          <Route path="/edit/:filmId" element={<EditFilmPage />} />
          <Route path="/my-reservations" element={<MyReservations />} />
          </Routes>
          </div>
        </UserSessionContext.Provider>
  </>
  );
}

export default App;
