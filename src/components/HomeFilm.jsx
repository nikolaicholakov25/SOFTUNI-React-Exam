import * as filmServices from '../services/filmServices'
import { Link } from 'react-router-dom'
export const HomeFilmCard = (props) => {
    return (

        <Link to={`/film-details/${props._id}`}>
            <div className="card">
                <img src={props.imageUrl} alt="filmPicture" />
                <h1 className='cardTitle'>{props.title}</h1>
            </div>
        </Link>
    )
}