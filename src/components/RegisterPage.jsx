import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../services/userServices"
import { UserSessionContext } from "./contexts/userSessionContext"

export const RegisterPage = () => {
    let navigate = useNavigate()
    let {setChange} = useContext(UserSessionContext)


    const onRegister = (e) => {
        e.preventDefault()
        let form = new FormData(document.getElementById('form'))

        let [email,password,repassword] = form.values()

        if(password === repassword){
            register(email,password)
            .then(x => setChange(f => !f))
            .then(f => navigate('/'))
        }
    }

    return (
        <form id="form" className="loginForm" onSubmit={onRegister} method="post">
        <ul>
            <li>
                <label htmlFor="email">email</label>
                <input type="text" id="email" name="email"/>
            </li>
            <li>
                <label htmlFor="password">password</label>
                <input type="password" id="password" name="password"/>
            </li>
            <li>
                <label htmlFor="repassword">repeat password</label>
                <input type="password" id="repassword" name="repassword"/>
            </li>

            <li className="submitBtn">
                <input type="submit" value='Submit'/>
            </li>
        </ul>
            </form>    
    )
}