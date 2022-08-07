import { useContext } from "react"
import { Link } from "react-router-dom"
import { logout } from "../services/userServices"
import { UserSessionContext } from "./contexts/userSessionContext"
export const NavBar = () => {

    let {userSession , setChange} = useContext(UserSessionContext)

    const logoutHandler = (e) => {
        e.preventDefault()
        logout()
        .then(r => setChange(x => !x))
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
                    <li><Link to={'/all-films'}>All Films</Link ></li>
                    <li><Link to={'/kids-movies'} >For Kids</Link ></li>
                    <li><Link to={'/add-film'}>Add Film</Link ></li>
                    <li><Link onClick={logoutHandler} to={'/'}>Log Out</Link ></li>
                </>
                :
                <>
                    <li><Link to={'/all-films'}>All Films</Link ></li>
                    <li><Link to={'/kids-movies'} >For Kids</Link ></li>
                    <li><Link to={'/login'}>Login</Link ></li>
                    <li><Link to={'/register'}>Register</Link ></li>
                </>
                }
            </ul>
        </div>
    )
}