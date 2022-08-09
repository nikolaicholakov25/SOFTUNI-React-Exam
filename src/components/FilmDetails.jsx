import { useContext, useEffect, useState } from "react"
import { useParams , Link, useNavigate} from "react-router-dom"
import { addLikes, deleteFilm, getFilm } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"


export const FilmDetails = () => {
    let {userSession , library} = useContext(UserSessionContext)
    let navigate = useNavigate()
    let userId

    if(userSession){
        userId = userSession._id
    }


    let [film,setFilm] = useState({})
    let [userLiked,setLiked] = useState(false)
    let {filmId} = useParams()

    let filmCreator = film.creatorId

    useEffect(() => {
       getFilm(filmId)
       .then(r => setFilm(r))
       .then(x => updateStateForLikes())

    }, [] )

    // console.log(userLiked);

    const updateStateForLikes = async () => {

        let film = await getFilm(filmId)

        for(let i =0;i<film.likes.length;i++){
            if(film.likes[i] === userId){
                setLiked(true)
            }
            else {
                // console.log('doestn go in');
            }
        }
    }
    



    const onDeleteHandler = (e) => {
        e.preventDefault()
        if( window.confirm(`Are you sure you want to delete ${film.title} ?`)){
           deleteFilm(filmId)
           .then(x => navigate('/'))
        } else {

        }
    }

    const onLike =  () => {
        let updatedFilm = film
        updatedFilm.likes.push(userId)
        console.log(updatedFilm);
        addLikes(filmId, updatedFilm)
        .then(x => updateStateForLikes())
    }

    return (
        <div className="filmdetails">
            <div className="img">
                <img src={film.imageUrl} alt="filmImg" />
            </div>

            <div className="description">
                <h1 className="filmtitle">{film.title}</h1>
                <div className="descriptionWrapper">
                    <p className="paragraph">{film.description}</p>
                    <div className="buttons">
                        {   
                        userId ?
                        filmCreator === userId 
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

                        {userLiked === false
                        ? 
                        <button onClick={onLike} className="like">Like</button>
                        
                        : null
                        }

                        {film.likes
                        ? 
                        <div className="likes"><h2><i className="fa-solid fa-heart"></i>{film.likes.length}</h2></div>
                        : null
                        }
                        </>
                        :
                        <Link to={`/login`}>
                        <button>
                        Please log in to see the details!
                        </button>
                        </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}