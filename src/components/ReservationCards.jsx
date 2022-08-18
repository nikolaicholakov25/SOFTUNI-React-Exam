import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
export const ReservationCards = (props) => {
    return (

        <Link to={`/film-details/${props.id}`}>
            <div className="card">
            <Link to={'/my-reservations'}>
                <div onClick={() => props.remove(props.id)} className='removeReservation'>
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
            </Link>
                <img src={props.imageUrl} alt="filmPicture" />
                <h1 className='cardTitle'>{props.title}</h1>
            </div>
        </Link>
    )
}
