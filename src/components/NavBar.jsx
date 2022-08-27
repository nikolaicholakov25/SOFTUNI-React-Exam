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
        .then(x => navigate('/'))
        .then(o => closeUl())
    }

    const showUl = () => {

        let menu = document.getElementsByClassName('hamMenu')[0]
        let closeMenu = document.getElementsByClassName('hamMenuClose')[0]
        let element = document.getElementsByClassName('ul')[0]

        element.classList.add('openMenu')
        element.classList.add('openUl')
        menu.classList.remove('openMenu')
        closeMenu.classList.add('openMenu')

    }

    const closeUl = () => {
        let element = document.getElementsByClassName('ul')[0]
        let menu = document.getElementsByClassName('hamMenu')[0]
        let closeMenu = document.getElementsByClassName('hamMenuClose')[0]

        element.classList.remove('openMenu')
        element.classList.remove('openUl')
        menu.classList.add('openMenu')
        closeMenu.classList.remove('openMenu')

    }

    return(
        <div className="navbar" id="navbar">
            <div className="hamMenu openMenu" onClick={showUl}>
            <i class="fa-solid fa-bars"></i>
            </div>

            <div onClick={closeUl} className="hamMenuClose">
            <i class="fa-solid fa-xmark"></i>
            </div>

            <div className="logo">
                <Link to={'/'}>CENTRAL CINEMA</Link>
            </div>
            <ul className="ul">
                {userSession 
                ?
                <>
                    <li><Link onClick={closeUl} to={'/'}>All Films</Link ></li>
                    <li><Link onClick={closeUl} to={'/my-reservations'} >My Reservations</Link ></li>
                    <li><Link onClick={closeUl}to={'/add-film'}>Add Film</Link ></li>
                    <li><Link onClick={closeUl}to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link  onClick={logoutHandler} to={'/'}>Log Out</Link ></li>
                </>
                :
                <>
                    <li><Link onClick={closeUl} to={'/'}>All Films</Link ></li>
                    <li><Link onClick={closeUl} to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link onClick={closeUl}to={'/login'}>Login</Link ></li>
                    <li><Link onClick={closeUl} to={'/register'}>Register</Link ></li>
                </>
                }
            </ul>
        </div>
    )
}