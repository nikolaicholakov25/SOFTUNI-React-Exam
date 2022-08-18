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
    }

    return(
        <div className="navbar">
            <div className="logo">
                <Link to={'/'}>CENTRAL CINEMA</Link>
            </div>
            <ul className="ul">
                {userSession 
                ?
                <>
                    <li><Link to={'/'}>All Films</Link ></li>
                    <li><Link to={'/my-reservations'} >My Reservations</Link ></li>
                    <li><Link to={'/add-film'}>Add Film</Link ></li>
                    <li><Link to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link onClick={logoutHandler} to={'/'}>Log Out</Link ></li>
                </>
                :
                <>
                    <li><Link to={'/'}>All Films</Link ></li>
                    <li><Link to={'/where-to-find-us'}>Where To Find Us</Link ></li>
                    <li><Link to={'/login'}>Login</Link ></li>
                    <li><Link to={'/register'}>Register</Link ></li>
                </>
                }
            </ul>
        </div>
    )
}