import { useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { getAll, getFilm, reserveSeat } from "../services/filmServices"
import { UserSessionContext } from "./contexts/userSessionContext"
import { HomeFilmCard } from "./HomeFilm"
import { ReservationCards } from "./ReservationCards"

export const Reservations = (props) => {
    // console.log(props);
    let [reservations, setReservations] = useState([])
    let [price,setPrice] = useState(0)
    let [onRemove,setRemove] = useState(false)

    let {userSession} = useContext(UserSessionContext)
    let navigate = useNavigate()

    useEffect(() => {
        getAll()
        .then(x => {
            let results = []
            let newPrice = 0
            x.map(each => {
                if(each.film.reservations.includes(userSession.uid)){
                    results.push(each)
                    newPrice += Number(each.film.price)
                }
            })

            setReservations(results)
            setPrice(newPrice)
        })
    },[onRemove])
    
    props.setprice(price)


    const removeReservation = async (filmId) => {
        let userId = userSession.uid
        let film = await getFilm(filmId)
        let res = film.data()
        
        if(window.confirm(`Are you sure you want to delete "${res.title}" from your resevations?`)){
    
            for(let i =0;i<res.reservations.length;i++){
                if(res.reservations[i] === userId){
                    res.reservations.splice(i,1)

                    reserveSeat(filmId,res)
                    .then(y => {
                        setRemove(x => !x)})
                    }
            }
        }
    }

    return (
        <div className="homegallery">
            {reservations.length > 0 
            ? reservations.map(x => 
                <ReservationCards key={x.id} remove={removeReservation} {...x}/>)
            : <div className="noFilms" >No Reservations Yet...</div>}

        </div>
    )
}