import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editFilm, getFilm } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"

export const EditFilmPage = (props) => {
    let {userSession} = useContext(UserSessionContext)

    let {filmId} = useParams()

    let [film,setFilm] = useState({})

    useEffect(() => {
        getFilm(filmId)
        .then(x => setFilm(x.data()))
    },[])


    let navigate = useNavigate()

    const onEditFilm = (e) => {
        e.preventDefault()

        let form = new FormData(document.getElementById('form'))

        let [title,category,description,imageUrl,price] = form.values()
        
        let film1 = {
            title,
            category,
            description,
            imageUrl,
            price,
            creatorId: userSession.uid,
            likes: film.likes,
            reservations: film.reservations
        }

        if(title && category && description && imageUrl && price !== ''){
            editFilm(filmId, film1)
            .then(x => navigate(`/film-details/${filmId}`))
        } else {
            alert('please fill all fields')
        }

    }

    return (
    <div className="loginForm">
        <form onSubmit={onEditFilm} method="post" id="form">
        <ul>
            <li>
                <label htmlFor="title">Title</label>
                <input defaultValue={film.title} type="text" id="title" name="title"/>
            </li>
            <li>
                <label htmlFor="category">Category</label>
                <input defaultValue={film.category} type="text" id="category" name="category"/>
            </li>
            <li>
                <label htmlFor="description">Description</label>
                <textarea defaultValue={film.description} type="text" id="description" name="description"/>
            </li>
            <li>
                <label htmlFor="imageUrl">ImageUrl</label>
                <input defaultValue={film.imageUrl} type="text" name="imageUrl" id="imageUrl"/>
            </li>
            <li>
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" defaultValue={film.price}/>
            </li>
            <li className="submitBtn">
                <input type="submit" value='Submit'/>
            </li>
        </ul>
            </form>    
    </div>
    )
}