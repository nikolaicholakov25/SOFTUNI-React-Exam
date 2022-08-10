import { useContext, useEffect, useState } from "react"
import { getAll } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"

export const MyReservations = () => {
    let {userSession} = useContext(UserSessionContext)
    let [films,setFilms] = useState()

    useEffect(() => {
        getAll()
        .then(x => console.log(x))
    },[])

    return (
        <div className="reservations">
            <div className="reservationh1"><h1>Reservations for {userSession.email}</h1></div>
            <div className="cardsSpace">
                "cards"
            </div>
        </div>
    )
}