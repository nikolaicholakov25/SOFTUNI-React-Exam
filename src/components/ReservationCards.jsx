import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
export const ReservationCards = (props) => {
    return (
                <div className='reservationChild'>
                <div onClick={() => props.remove(props.id)} className='removeReservation'>
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
        <Link to={`/film-details/${props.id}`}>
            <div className="reservationCard">
                <img src={props.film.imageUrl} alt="filmPicture" />
                <h1 className='cardTitle'>{props.film.title}</h1>
            </div>
        </Link>
                </div>
    )
}
