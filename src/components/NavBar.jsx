import { useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { logout } from "../services/userServices"
import { UserSessionContext } from "./contexts/userSessionContext"
export const NavBar = () => {

    let navigate = useNavigate()
    let {userSession , setChange} = useContext(UserSessionContext)

    const logoutHandler = (e) => {
        e.preventDefault()
        logout()
        .then(r => setChange(x => !x))
        .then(o => showUl())
        .then(x => navigate('/'))
    }

    const showUl = () => {
        let element = document.getElementsByClassName('ul')[0]
        let app = document.getElementsByClassName('App')[0]

        if( element.style.display === 'block' ){
            element.style.display = 'none'
            app.style.display = 'block'
        } else {
            element.style.display = 'block'
            app.style.display = 'none'
        }
    }

    const closeHamMenu = () => {

    }

    return(
        <div className="navbar">
            <div className="hamMenu" onClick={showUl}>
            <i class="fa-solid fa-bars"></i>
                </div>
            <div className="logo">
                <Link to={'/'}>CENTRAL CINEMA</Link>
            </div>
            <ul className="ul">
                {userSession 
                ?
                <>
                    <li><Link onClick={showUl} to={'/'}>All Films</Link ></li>
                    <li><Link onClick={showUl} to={'/my-reservations'} >My Reservations</Link ></li>
                    <li><Link onClick={showUl}to={'/add-film'}>Add Film</Link ></li>
                    <li><Link onClick={showUl}to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link  onClick={logoutHandler} to={'/'}>Log Out</Link ></li>
                </>
                :
                <>
                    <li><Link onClick={showUl} to={'/'}>All Films</Link ></li>
                    <li><Link onClick={showUl} to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link onClick={showUl}to={'/login'}>Login</Link ></li>
                    <li><Link onClick={showUl} to={'/register'}>Register</Link ></li>
                </>
                }
            </ul>
        </div>
    )
}