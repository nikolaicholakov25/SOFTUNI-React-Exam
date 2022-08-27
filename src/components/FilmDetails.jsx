import { useContext, useEffect, useState } from "react"
import { useParams , Link, useNavigate} from "react-router-dom"
import { addLikes, deleteFilm, getFilm, reserveSeat } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"


export const FilmDetails = () => {
    let {userSession} = useContext(UserSessionContext)
    let navigate = useNavigate()
    let userId

    if(userSession){
        userId = userSession.uid
    }


    let [film,setFilm] = useState({})
    let [userLiked,setLiked] = useState(false)
    let [userReserved,setReserved] = useState(false)

    let {filmId} = useParams()

    let filmCreator = film.creatorId

    useEffect(() => {
       getFilm(filmId)
       .then(r => setFilm(r.data()))
       .then(x => updateStateForLikes())
       .then(t => updateStateForReservation())

    }, [userLiked] )

    const updateStateForLikes = async () => {

        let film = await getFilm(filmId)
        let res = film.data()


        for(let i =0;i<res.likes.length;i++){
            if(res.likes[i] === userId){
                setLiked(true)
            }
            else {
            }
        }
    }

    const checkLike = () => {
        if(userLiked){
            alert('You have already liked this film')
        } else {
            alert('You can like this movie by pressing "Like"')
        }
    }

    const updateStateForReservation = async () => {
        let film = await getFilm(filmId)
        let res = film.data()
        for(let i =0;i<res.reservations.length;i++){
            if(res.reservations[i] === userId){
                setReserved(true)
            }
            else {
                // console.log('doestn go in');
            }
        }
    }

    const reserveASeat = () => {
        let updatedFilm = film
        updatedFilm.reservations.push(userId)

        reserveSeat(filmId,updatedFilm)
        .then(x => updateStateForReservation())

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
        addLikes(filmId, updatedFilm)
        .then(x => updateStateForLikes())
    }

    const onDislike = () => {
        let updatedFilm = film

        if(window.confirm(`Are you sure you want to dislike ${film.title}`)){

            for(let i = 0;i<updatedFilm.likes.length;i++){
                if(updatedFilm.likes[i] === userId){
                    updatedFilm.likes.splice(i,1)
                }
            }
            
            addLikes(filmId,updatedFilm)
            .then(v => setLiked(false))
        }
            
    }

    const loginAlert = () => {
        alert('Please Login to like')
    }

    return (
        <div className="filmdetails">
            <div className="img">
                <div className="pricetag"><i class="fa-solid fa-bookmark">
                <h6 className="price">{film.price}<i class="fa-solid fa-dollar-sign"></i></h6>
                </i>
               </div>
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
                            <button onClick={checkLike} className="likes"><i className="fa-solid fa-heart"></i>{
                                film.likes ? film.likes.length : null
                            }</button>
                        </>
                        :
                        <>
                        {userReserved 
                        ? <Link to='/my-reservations'><button>You Are In! Check your reservations!</button></Link>
                        :
                        <button onClick={reserveASeat} className="add-favorites">Reserve A Seat</button>
                         }

                        {userLiked === false
                        ? 
                        <button onClick={onLike} className="like">Like</button>
                        :
                        <button onClick={onDislike}>Dislike</button>
                    }

                        {film.likes
                        ? 
                        <button onClick={checkLike} className="likes"><i className="fa-solid fa-heart"></i>{film.likes.length}</button>
                        : null
                    }
                        </>
                        :
                        <Link to={`/login`}>
                        <button>
                        Please log in to interact with the film!
                        </button>
                        </Link>
                        }
                        {film.likes 
                        ? 
                        userSession 
                        ? null
                        : <button onClick={loginAlert} className="likes"><i className="fa-solid fa-heart"></i>{film.likes.length}</button>
                        : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}