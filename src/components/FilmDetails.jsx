import { useContext, useEffect, useState } from "react"
import { useParams , Link, useNavigate} from "react-router-dom"
import { deleteFilm, getFilm } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"

export const FilmDetails = () => {
    let {userSession} = useContext(UserSessionContext)
    let navigate = useNavigate()
    let userId = userSession._id


    let [film,setFilm] = useState({})
    let {filmId} = useParams()

    let filmCreator = film.creatorId

    useEffect(() => {
       getFilm(filmId)
       .then(r => setFilm(r))
    }, [])

    const onDeleteHandler = (e) => {
        e.preventDefault()
        if( window.confirm(`Are you sure you want to delete ${film.title} ?`)){
           deleteFilm(filmId)
           .then(x => navigate('/'))
        } else {

        }
    }

    return (
        <div className="filmdetails">
            <div className="img">
                <img src={film.imageUrl} alt="" />
            </div>
            <div className="description">
                <h1 className="filmtitle">{film.title}</h1>
                <div className="descriptionWrapper">
                    <p className="paragraph">{film.description}</p>
                    <div className="buttons">
                        {filmCreator === userId 
                        ?
                        <>
                            <Link to={`/edit/${filmId}`}>
                            <button className="edit">Edit</button>
                            </Link>
                            <Link to={`/delete/${filmId}`}>
                            <button onClick={onDeleteHandler} className="delete">Delete</button>
                            </Link>
                        </>
                        :
                        <>
                        <button className="add-favorites">Add To Favorites</button>
                        <button className="like">Like</button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}