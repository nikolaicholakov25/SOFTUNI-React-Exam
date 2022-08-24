import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../services/userServices" 
import { UserSessionContext } from "./contexts/userSessionContext"

export const LoginPage =() => {
    let navigate = useNavigate()
    let {setChange} = useContext(UserSessionContext)

    const onLogin =  (e) => {
        e.preventDefault()

        let form = new FormData(document.getElementById('form'))

        let [email , password] = form.values()

        login(email , password)
        .then(b => console.log(b))
        .then(r => setChange(x => !x))
        .then(x => navigate('/'))
        .catch(err =>  console.log(err))

    }


    return (
        <form id="form" className="loginForm" onSubmit={onLogin} method="post">
        <ul>
            <li>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email"/>
            </li>
            <li>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password"/>
            </li>
            
            <li className="submitBtn">
                <input type="submit" value='Submit'/>
            </li>
        </ul>
            </form>    
    )
}