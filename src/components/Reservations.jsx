import { useContext, useEffect, useState } from "react"
import { getAll } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"
import { HomeFilmCard } from "./HomeFilm"
import { ReservationCards } from "./ReservationCards"

export const Reservations = (props) => {
    let [reservations, setReservations] = useState([])
    let {userSession} = useContext(UserSessionContext)

    useEffect(() => {

        getAll()
        .then(x => 
            {
                let allFilms = Object.entries(x);
            for(let each of allFilms) {
                let [id,film] = each

                    for(let each of film.reservations) {
                        if(each === userSession._id){
                            film.id = id
                            setReservations(x => [...x,film])
                        }
                    }
            }
        })
    },[])
    
    return (
        <div className="homegallery">
            {reservations.length > 0 
            ? reservations.map(x => 
                <ReservationCards key={x._id} {...x}/>)
            : <div className="noFilms" >No Reservations Yet...</div>}

        </div>
    )
}