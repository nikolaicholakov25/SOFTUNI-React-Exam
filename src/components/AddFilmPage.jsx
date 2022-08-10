import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { createFilm } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"

export const AddFilmPage = (props) => {

    let {userSession} = useContext(UserSessionContext)

    let navigate = useNavigate()
    const onAddFilm = (e) => {
        e.preventDefault()

        let form = new FormData(document.getElementById('form'))

        let [title,category,description,imageUrl,price] = form.values()

        let film = {
            title,
            category,
            description,
            imageUrl,
            price,
            creatorId: userSession._id,
            likes: [],
            reservations: []
        }

        if(title && category && description && imageUrl && price !== ''){
            createFilm(film)
            .then(x => navigate('/'))
        } else {
            alert('please fill all fields')
        }

    }

    return (
    <div className="loginForm">
        <form onSubmit={onAddFilm} method="post" id="form">
        <ul>
            <li>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title"/>
            </li>
            <li>
                <label htmlFor="category">Category</label>
                <input type="text" id="category" name="category"/>
            </li>
            <li>
                <label htmlFor="description">Description</label>
                <textarea type="text" id="description" name="description"/>
            </li>
            <li>
                <label htmlFor="imageUrl">ImageUrl</label>
                <input type="text" name="imageUrl" id="imageUrl"/>
            </li>
            <li>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price"/>
            </li>
            <li className="submitBtn">
                <input type="submit" value='Submit'/>
            </li>
        </ul>
            </form>    
    </div>
    )
}