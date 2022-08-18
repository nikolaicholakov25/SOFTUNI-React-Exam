import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { getAll, getFilm, reserveSeat } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"
import { HomeFilmCard } from "./HomeFilm"
import { ReservationCards } from "./ReservationCards"

export const Reservations = (props) => {
    let [reservations, setReservations] = useState([])
    let [price,setPrice] = useState(0)
    let [onRemove,setRemove] = useState(false)

    let {userSession} = useContext(UserSessionContext)
    let navigate = useNavigate()

    useEffect(() => {
        getAll()
        .then(x => {
            let allFilms = Object.entries(x);
            let newFilmsState = []
            let newPrice = 0

            for(let each of allFilms) {
                let [id,film] = each

                    for(let each of film.reservations) {
                        if(each === userSession._id){
                            film.id = id
                            newFilmsState.push(film)
                            newPrice += Number(film.price)
                        }
                    }
                }

            setReservations(newFilmsState)
            setPrice(newPrice)
        })
    },[onRemove])
    
    props.setprice(price)


    const removeReservation = async (filmId) => {
        let userId = userSession._id
        let film = await getFilm(filmId)
        
        if(window.confirm('Are you sure you want to delete resevation?')){
    
            for(let i =0;i<film.reservations.length;i++){
                if(film.reservations[i] === userId){
                    film.reservations.splice(i,1)
    
                    reserveSeat(filmId,film)
                    .then(y => {
                        console.log('here');
                        setRemove(x => !x)})
                    }
            }
        }
    }

    return (
        <div className="homegallery">
            {reservations.length > 0 
            ? reservations.map(x => 
                <ReservationCards key={x._id} remove={removeReservation} {...x}/>)
            : <div className="noFilms" >No Reservations Yet...</div>}

        </div>
    )
}